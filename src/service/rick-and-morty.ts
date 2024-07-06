import { makeRequest } from "../client/rick-and-morty";
import { IRickAndMortyServiceGetCharactersParams } from "../interfaces/service";

const CHARACTER_PATH = "character";

export const getCharacters = async (
  params: IRickAndMortyServiceGetCharactersParams
) => {
  return makeRequest({ path: CHARACTER_PATH, params: params.filters }).then(
    (response) => response.json()
  );
};
