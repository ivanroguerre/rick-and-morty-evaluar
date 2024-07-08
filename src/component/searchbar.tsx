import { useContext } from "react";

import { ApiContext } from "../context/api";

import {
  Button,
  Input,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Searchbar = () => {
  const apiContext = useContext(ApiContext);
  const { colorMode } = useColorMode();

  return (
    <Stack align={["stretch", "center"]} mb={[8, 12]} gap={3} flexDir={["column", "row"]}>
      <Input
        // `searchCriteria` podría ser undefined en el primer render y eso
        // ocasiona un warning. Por eso se pasa una cadena vacía en dado caso.
        value={apiContext?.searchCriteria || ""}
        onChange={(e) => apiContext?.setSearchCriteria(e.target.value)}
        placeholder="Nombre del personaje"
        borderRadius="2xl"
      />
      <Button
        onClick={apiContext?.getData}
        isLoading={apiContext?.loading}
        loadingText="Buscando..."
        spinnerPlacement="start"
        spinner={<></>}
        borderRadius="2xl"
        backgroundColor={colorMode === "dark" ? "#4B4970" : "#27087F"}
        color="#FFFFFF"
        padding="8px 24px"
        _hover={{
          backgroundColor: colorMode === "dark" ? "revert" : "#7D51F5",
        }}
        rightIcon={<SearchIcon />}
        fontWeight="bold"
      >
        Buscar
      </Button>
    </Stack>
  );
};
export default Searchbar;
