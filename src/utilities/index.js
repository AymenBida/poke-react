export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const numeratePokemon = (response) => {
  const newResult = response.data.results.map((pokemon, index) => ({ ...pokemon, id: index + 1 }));
  return newResult;
};
