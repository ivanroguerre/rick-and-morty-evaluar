import { ICharacter } from "./api";

export interface IApiContext {
  characters: ICharacter[] | undefined;
  error: string | undefined;
  loading: boolean;
}
