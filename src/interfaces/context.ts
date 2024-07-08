import { Dispatch, SetStateAction } from "react";

import { ICharacter } from "./api";

export interface IApiContext {
  characters: ICharacter[] | undefined;
  error: string | undefined;
  loading: boolean;
  searchCriteria: string | undefined;
  setSearchCriteria: Dispatch<SetStateAction<string | undefined>>;
  getData: VoidFunction;
}
