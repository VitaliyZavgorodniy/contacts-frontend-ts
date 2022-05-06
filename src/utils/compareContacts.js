export const comparedContact = (array, key, value) =>
  array.find((contact) => contact[key].toLowerCase() === value.toLowerCase());
