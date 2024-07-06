import { createContext, PropsWithChildren, useState } from "react";

import { IApiContext } from "../interfaces/context";

export const ApiContext = createContext<IApiContext | undefined>(undefined);

export const ApiContextProvider = ({ children }: PropsWithChildren) => {
  const [characters, setCharacters] = useState();

  if (characters === undefined) return <>Loading...</>;
  return (
    <ApiContext.Provider value={{ characters }}>{children}</ApiContext.Provider>
  );
};
