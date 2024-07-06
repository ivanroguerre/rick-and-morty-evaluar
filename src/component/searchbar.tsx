import { useContext } from "react";

import { ApiContext } from "../context/api";

import { Input } from "@chakra-ui/react";

const Searchbar = () => {
  const apiContext = useContext(ApiContext);
  return (
    <Input
      value={apiContext?.searchCriteria}
      onChange={(e) => apiContext?.setSearchCriteria(e.target.value)}
      placeholder="Nombre del personaje"
    />
  );
};
export default Searchbar;
