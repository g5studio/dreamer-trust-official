/* eslint-disable */
import { ErrorType, IndexedDatabaseTable } from '@shared/enums';
import { Log } from '@utilities/helpers/log.helper';

type BaseOperateTableProps = {
  tableName: IndexedDatabaseTable;
  onError?: () => void;
};

type CreateData<TableData> = {
  action: 'create';
  data: TableData;
} & BaseOperateTableProps;

type ReadData<TableData> = {
  action: 'read';
  callback: (data: TableData[] | TableData) => void;
  key?: number;
} & BaseOperateTableProps;

type UpdateData<TableData> = {
  action: 'update';
  key: number;
  data: TableData;
} & BaseOperateTableProps;

type DeleteData = {
  action: 'delete';
  key: number;
} & BaseOperateTableProps;

type OperateTableItemArgs<TableData> = CreateData<TableData> | ReadData<TableData> | UpdateData<TableData> | DeleteData;

type OperateDatabaseArgs<Target = IDBDatabase> = {
  /**
   * 當前版本開啟後呼叫
   */
  onSuccess?: (target?: Target) => void;
  onError?: (
    target?: Target,
    detail?: {
      errorType: ErrorType;
      event: Event;
    },
  ) => void;
  /**
   * 版本更新後呼叫
   */
  onUpdate?: (target?: Target) => void;
  newVersion?: boolean;
};

type OperateTableArgs = OperateDatabaseArgs<IDBObjectStore> & {
  tableName: IndexedDatabaseTable;
  mode: IDBTransactionMode;
};

interface IIndexedDB {
  /**
   * 當前瀏覽器是否支援indexedDB
   */
  isSupported: boolean;
  /**
   * 建立表格
   * @param table 表名
   * @param primaryKey 主鍵
   * @param fields 欄位
   */
  createTable: (table: IndexedDatabaseTable, primaryKey: string, fields: string[]) => void;
  deleteTable: (table: IndexedDatabaseTable) => void;
  operateTable: (args: OperateTableArgs) => void;
  operateTableItem: <TableData>(args: OperateTableItemArgs<TableData>) => void;
}

type IndexedDBProps = {
  name: string;
};

class IndexedDB implements IIndexedDB {
  private name: string;

  get isSupported(): boolean {
    return (
      typeof window !== 'undefined' &&
      Object.keys(window).includes('indexedDB') &&
      typeof window.indexedDB !== 'undefined' &&
      !!window.indexedDB.databases
    );
  }

  constructor({ name }: IndexedDBProps) {
    this.name = name;
  }

  public deleteTable(tableName: IndexedDatabaseTable) {
    this.operateDataAsync({
      onSuccess: () => {
        this.operateDataAsync({
          newVersion: true,
          onSuccess: (db: IDBDatabase) => {
            db.close();
          },
          onUpdate: (db) => {
            db?.deleteObjectStore(tableName);
          },
        });
      },
    });
  }

  public checkTablesExist(tableNames: IndexedDatabaseTable[]): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.operateDataAsync({
        onSuccess: (db: IDBDatabase) => {
          resolve(tableNames.filter((name) => db.objectStoreNames.contains(name)).length === tableNames.length);
        },
        onError: (_, detail) => {
          if (detail?.errorType === ErrorType.IndexedDB) {
            reject();
          }
        },
      });
    });
  }

  public createTable(tableName: IndexedDatabaseTable, primaryKey: string) {
    this.operateDataAsync({
      onSuccess: (db: IDBDatabase) => {
        if (!db.objectStoreNames.contains(tableName)) {
          this.operateDataAsync({
            newVersion: true,
            onSuccess: (db: IDBDatabase) => {
              db.close();
            },
            onUpdate: (db: IDBDatabase) => {
              db.createObjectStore(tableName, { keyPath: primaryKey, autoIncrement: true });
            },
          });
        }
      },
    });
  }

  /**
   * 操作指定表格
   * @param tableName
   * @returns {IDBObjectStore} 表格物件
   */
  public operateTable({ tableName, mode, onError, onUpdate }: OperateTableArgs): void {
    this.operateDataAsync({
      onSuccess: (db: IDBDatabase) => {
        if (db.objectStoreNames.contains(tableName)) {
          this.operateDataAsync({
            newVersion: true,
            onSuccess: (db: IDBDatabase) => {
              const transaction = db.transaction(tableName, mode);
              onUpdate?.(transaction.objectStore(tableName));
            },
          });
        } else {
          onError?.();
        }
      },
      onError: () => onError?.(),
    });
  }

  public operateTableItem<TableData = object>(args: OperateTableItemArgs<TableData>) {
    const tableParams: OperateTableArgs = {
      tableName: args.tableName,
      mode: 'readwrite',
      onError: args.onError,
    };
    switch (args.action) {
      case 'delete':
        this.operateTable({
          ...tableParams,
          onUpdate: (table: IDBObjectStore) => {
            table.delete(args.key);
          },
        });
        break;
      case 'create':
        this.operateTable({
          ...tableParams,
          onUpdate: (table: IDBObjectStore) => {
            table.add(args.data);
          },
        });
        break;
      case 'update':
        this.operateTable({
          ...tableParams,
          onUpdate: (table: IDBObjectStore) => {
            const request = table.get(args.key);
            request.onsuccess = () => {
              let target = request.result;
              target = { ...target, ...args.data };
              table.put(target);
            };
          },
        });
        break;
      default:
        this.operateTable({
          ...tableParams,
          onUpdate: (table: IDBObjectStore) => {
            const request = typeof args.key === 'number' ? table.get(args.key) : table.getAll();
            request.onsuccess = () => {
              args.callback(request.result as TableData | TableData[]);
            };
          },
        });
        break;
    }
  }

  private currentOperation: Promise<void> | undefined;

  private operateDataAsync({ onError, onSuccess, onUpdate, newVersion }: OperateDatabaseArgs) {
    if (this.currentOperation) {
      this.currentOperation = this.currentOperation.finally(() =>
        this.operateDatabase({ onError, onSuccess, onUpdate, newVersion }),
      );
    } else {
      this.currentOperation = this.operateDatabase({ onError, onSuccess, onUpdate, newVersion });
    }
  }

  private async operateDatabase({ onError, onSuccess, onUpdate, newVersion }: OperateDatabaseArgs) {
    try {
      return new Promise<void>((resolve, reject) => {
        window.indexedDB.databases().then((databases) => {
          const version = (databases.find(({ name }) => name === this.name)?.version ?? 1) + (newVersion ? 1 : 0);
          const request = window.indexedDB.open(this.name, version);
          request.onerror = (event) => {
            const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
            Log.error({ msg: 'Access indexedDB failed', params: event }, ErrorType.IndexedDB);
            onError?.(db, {
              errorType: ErrorType.IndexedDB,
              event,
            });
            db?.close();
            reject();
          };

          request.onupgradeneeded = (event) => {
            const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
            onUpdate?.(db);
          };

          request.onsuccess = (event) => {
            const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
            onSuccess?.(db);
            db.close();
            resolve();
          };
        });
      });
    } catch (error) {
      Log.error({ msg: 'Access indexedDB failed', params: error }, ErrorType.IndexedDB);
    }
  }
}

const db = new IndexedDB({
  name: 'fluid-indexed-db',
});

export default db;
