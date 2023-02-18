export const setToLocalStorage = (key: string, data: string) => {
  window.localStorage.setItem(key, data);
};

export const getFromLocalStorage = (key: string) => {
  return window.localStorage.getItem(key);
};

export const removeFromLocalStorage = (key: string) => {
  window.localStorage.removeItem(key);
};

export const clearStorage = () => {
  window.localStorage.clear();
};
