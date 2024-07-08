import { useContext } from "react";

import { ApiContext } from "../context/api";

import { Button, HStack, Input } from "@chakra-ui/react";

const Searchbar = () => {
  const apiContext = useContext(ApiContext);
  return (
    <HStack align="center" mb={[8, 12]}>
      <Input
        // `searchCriteria` podría ser undefined en el primer render y eso
        // ocasiona un warning. Por eso se pasa una cadena vacía en dado caso.
        value={apiContext?.searchCriteria || ""}
        onChange={(e) => apiContext?.setSearchCriteria(e.target.value)}
        placeholder="Nombre del personaje"
        borderRadius="2xl"
      />
      <Button onClick={apiContext?.getData}>Buscar</Button>
    </HStack>
  );
};
export default Searchbar;
