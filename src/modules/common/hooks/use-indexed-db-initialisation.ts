import { TimezoneConfig, TimezoneConfigs } from '@shared/interfaces';
import axios, { AxiosResponse } from 'axios';
import { translation } from '@shared/hooks/use-translation';
import db from '@utilities/indexed-db/instance';
import { createEffect, createSignal } from 'solid-js';
import { IndexedDatabaseTable } from '@shared/enums';
import { localAssetsEndpoint } from '@utilities/helpers/asset.helper';

/**
 * i18n及timezone存放於indexed-db內相關項目初始化
 */
export const useIndexedDBInitialisation = () => {
  const [isDBReady, setDBReady] = createSignal<boolean>(false);
  const [isAbortDB, setAbortDB] = createSignal<boolean>(false);

  /**
   * 加載本地時區資料
   * @param onLoaded 本地資源加載完成處理
   */
  const loadAssetTimezone = (onLoaded?: (data: TimezoneConfig[]) => void) => {
    localAssetsEndpoint(`/timezone/timezone_${translation.language}.json`)
      .then((path) => {
        void axios
          .create()
          .get(path)
          .then(({ data }: AxiosResponse<TimezoneConfig[]>) => {
            onLoaded?.(data);
          })
          .catch(() => {});
      })
      .catch(() => {});
  };

  let timer: NodeJS.Timeout;

  const checkDBReady = () => {
    if (db.isSupported) {
      void db
        .checkTablesExist([IndexedDatabaseTable.Timezone])
        .then((exist: boolean) => {
          db.createTable(IndexedDatabaseTable.Timezone, 'index');
          if (exist) {
            setDBReady(true);
            clearInterval(timer);
          }
        })
        .catch(() => {
          clearInterval(timer);
          setAbortDB(true);
          loadAssetTimezone();
        });
    } else {
      clearInterval(timer);
    }
  };

  timer = setInterval(checkDBReady, 500);

  // fetch i18n and timezone info after language updated
  createEffect(() => {
    // language will be updated by useTranslationInitialisation
    if (translation.language) {
      if (!db.isSupported || isDBReady() || isAbortDB()) {
        if (db.isSupported && !isAbortDB()) {
          db.operateTableItem<TimezoneConfigs>({
            action: 'read',
            tableName: IndexedDatabaseTable.Timezone,
            key: 1,
            callback: (data: TimezoneConfigs & { index: number }) => {
              loadAssetTimezone((config) => {
                if (data) {
                  const { index, ...current } = data;
                  db.operateTableItem<Partial<TimezoneConfigs>>({
                    action: 'update',
                    tableName: IndexedDatabaseTable.Timezone,
                    key: 1,
                    data: { ...current, ...{ [translation.language]: config } },
                  });
                } else {
                  db.operateTableItem<Partial<TimezoneConfigs>>({
                    action: 'create',
                    tableName: IndexedDatabaseTable.Timezone,
                    data: { [translation.language]: config },
                  });
                }
              });
            },
            onError: () => {
              loadAssetTimezone();
            },
          });
        } else {
          loadAssetTimezone();
        }
      }
    }
  });

  checkDBReady();
};
