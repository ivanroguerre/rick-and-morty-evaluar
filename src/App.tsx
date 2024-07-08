import { useContext } from "react";
import { ApiContext } from "./context/api";

import CharacterCard from "./component/character-card";
import {
  Container,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Spinner,
  Switch,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import Searchbar from "./component/searchbar";

const App = () => {
  const apiContext = useContext(ApiContext);
  const { colorMode, toggleColorMode } = useColorMode();

  console.log("colorMode", colorMode);

  const renderDynamicContent = () => {
    if (apiContext?.loading)
      return (
        <VStack>
          <Spinner size="xl" />
        </VStack>
      );

    if (apiContext?.error)
      return (
        <Text textAlign="center" fontWeight="semibold" fontSize="2xl">
          {apiContext.error}
        </Text>
      );

    return (
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={6}
      >
        {apiContext?.characters?.map((character) => (
          <GridItem key={character.id}>
            <CharacterCard character={character} />
          </GridItem>
        ))}
      </Grid>
    );
  };
  return (
    // Se realizan estos cálculos en duro ya que el ancho de las card viene determinado
    // por las imágenes que entrega la API (300x300)px
    <Container maxW={["320px", "664px", "664px", "1352px"]}>
      <FormControl display="flex" alignItems="center" justifyContent="flex-end">
        <FormLabel htmlFor="dark-mode" mb="0">
          Modo dark
        </FormLabel>
        <Switch
          id="dark-mode"
          defaultChecked={colorMode === "dark"}
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
      </FormControl>
      <Heading
        fontWeight="black"
        fontSize={["6xl", "8xl"]}
        textAlign="center"
        lineHeight={["60px", "105.7px"]}
        mb={[5, 10]}
      >
        RICK AND MORTY API
      </Heading>
      <Searchbar />
      {renderDynamicContent()}
    </Container>
  );
};

export default App;
