import { ref } from "vue";

export const inBrowser = typeof window !== "undefined";

/**
 * Retrieves last set value from local storage.
 * If unsuccessful returns a default value.
 *
 * @param {String} key
 * @param {any} defaultValue
 * @param {function(any): Boolean} valueIsValidFunc
 * @returns {any}
 */
export function getValueFromLocalStorage(
  key,
  defaultValue,
  valueIsValidFunc = null
) {
  if (!inBrowser) {
    return defaultValue;
  }

  const value = JSON.parse(localStorage.getItem(key));

  valueIsValidFunc();
  if (valueIsValidFunc && !valueIsValidFunc(value)) {
    return defaultValue;
  }

  return value;
}

/**
 * Sets a new value to the local storage.
 *
 * @param {String} key
 * @param {any} value
 */
export function setValueToLocalStorage(key, value) {
  if (!inBrowser) {
    return;
  }

  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * @enum {String}
 */
export const Game = {
  iw3: "iw3",
  iw4: "iw4",
  iw5: "iw5",
  t5: "t5",
  t6: "t6",
};

export const selectedGameKey = "oat-selected-game";

/** @type {import("vue").Ref<Game>} */
export const selectedGame = ref(
  getValueFromLocalStorage(
    selectedGameKey,
    Game.iw4,
    (value) => Object.values(Game).indexOf(value) >= 0
  )
);
