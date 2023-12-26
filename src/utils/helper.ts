export const setDataToLocalStorage = <T>(key: string, data: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Error setting data in localStorage:", error);
  }
};

/**
 * The function `getDataFromLocalStorage` retrieves data from the localStorage using a specified key
 * and returns it as a parsed JSON object, or null if the data does not exist or an error occurs.
 * @param {string} key - The `key` parameter is a string that represents the key under which the data
 * is stored in the localStorage.
 * @returns the data retrieved from localStorage, parsed as JSON, if it exists. If the data does not
 * exist or there is an error, it returns null.
 */

export const getDataFromLocalStorage = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting data from localStorage:", error);
    return null;
  }
};

/**
 * The function `clearLocalStorageByKey` removes an item from the localStorage using the provided key.
 * @param {string} key - The `key` parameter is a string that represents the key of the item you want
 * to remove from the localStorage.
 */

export const clearLocalStorageByKey = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error clearing localStorage item with key "${key}":`, error);
  }
};

/**
 * The function `getQueryParam` retrieves the value of a query parameter from the current URL.
 * @param {string} paramName - The `paramName` parameter is a string that represents the name of the
 * query parameter you want to retrieve from the URL.
 * @returns The function `getQueryParam` returns a string value if the query parameter with the
 * specified `paramName` exists in the URL. If the parameter does not exist or if there is an error
 * while getting the parameter, the function returns `null`.
 */
export const getQueryParam = (paramName: string): string | null => {
  try {
    const params = new URLSearchParams(window.location.search);
    return params.get(paramName);
  } catch (error) {
    console.error(
      `Error while getting query parameter "${paramName}": ${error}`
    );
    return null;
  }
};
