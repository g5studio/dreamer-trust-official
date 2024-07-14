const isBackspaceKey = (key: string) => key === 'Backspace';

const isDeleteKey = (key: string) => key === 'Delete';

export const isDeleteOrBackspaceKey = (key: string) => isBackspaceKey(key) || isDeleteKey(key);
