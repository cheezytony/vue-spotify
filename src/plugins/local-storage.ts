const expiresIn = 3600 * 1000;

type StorageItem = {
  key: string,
  value: unknown,
  expiresBy: number,
};

export const setItem = (key: string, value: unknown): void => {
  const data: StorageItem = {
    key,
    value,
    expiresBy: (new Date().getTime() + expiresIn),
  };

  return localStorage.setItem(key, JSON.stringify(data));
};

export const getItem = (key: string): unknown | null => {
  const item = localStorage.getItem(key);
  if (!item) {
    return null;
  }
  const data: StorageItem = JSON.parse(item);
  const now = new Date().getTime();
  return data && data.expiresBy > now ? data.value : null;
};

export const removeItem = (key: string): void => localStorage.removeItem(key);
