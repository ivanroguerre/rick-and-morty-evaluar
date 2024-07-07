import { useContext } from "react";

import { ApiContext } from "../context/api";

import { Input } from "@chakra-ui/react";

const Searchbar = () => {
  const apiContext = useContext(ApiContext);
  return (
    <Input
      // `searchCriteria` podría ser undefined en el primer render y eso
      // ocasiona un warning. Por eso se pasa una cadena vacía en dado caso.
      value={apiContext?.searchCriteria || ""}
      onChange={(e) => apiContext?.setSearchCriteria(e.target.value)}
      placeholder="Nombre del personaje"
      mb={[8, 12]}
    />
  );
};
export default Searchbar;
