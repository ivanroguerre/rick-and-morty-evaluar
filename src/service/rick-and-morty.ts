import { makeRequest } from "../client/rick-and-morty";

import { ICharacter } from "../interfaces/api";
import { IRickAndMortyServiceGetCharactersParams } from "../interfaces/service";

const CHARACTER_PATH = "character";

export const getCharacters = async (
  params: IRickAndMortyServiceGetCharactersParams
) => {
  return await makeRequest<ICharacter>({
    path: CHARACTER_PATH,
    params: params.filters,
  });
};
