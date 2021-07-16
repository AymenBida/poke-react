export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const getRange = (number) => [...Array(number).keys()].map((n) => n + 1);
