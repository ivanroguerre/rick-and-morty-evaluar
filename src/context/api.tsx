import { createContext, PropsWithChildren, useEffect, useState } from "react";

import { getCharacters } from "../service/rick-and-morty";

import { IApiContext } from "../interfaces/context";
import { ICharacter } from "../interfaces/api";

export const ApiContext = createContext<IApiContext | undefined>(undefined);

export const ApiContextProvider = ({ children }: PropsWithChildren) => {
  const [characters, setCharacters] = useState<ICharacter[]>();
  const [searchCriteria, setSearchCriteria] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const charactersResponse = await getCharacters({
          filters: { name: searchCriteria },
        });
        setCharacters(charactersResponse.results);
      } catch {
        console.log();
      }
    })();
  }, [searchCriteria]);

  if (characters === undefined) return <>Loading...</>;
  return (
    <ApiContext.Provider value={{ characters }}>{children}</ApiContext.Provider>
  );
};
