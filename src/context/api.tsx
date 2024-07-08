import { createContext, PropsWithChildren, useEffect, useState } from "react";

import { getCharacters } from "../service/rick-and-morty";

import { IApiContext } from "../interfaces/context";
import { ICharacter } from "../interfaces/api";

export const ApiContext = createContext<IApiContext | undefined>(undefined);

export const ApiContextProvider = ({ children }: PropsWithChildren) => {
  const [characters, setCharacters] = useState<ICharacter[]>();
  const [searchCriteria, setSearchCriteria] = useState<string>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const charactersResponse = await getCharacters({
        filters: { name: searchCriteria },
      });
      setCharacters(charactersResponse.results);
      setError(undefined);
    } catch (error) {
      setError(error as string);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        characters,
        error,
        loading,
        searchCriteria,
        setSearchCriteria,
        getData,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
