import { useContext } from "react";
import { ApiContext } from "./context/api";

import CharacterCard from "./component/character-card";
import { Container } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Searchbar from "./component/searchbar";

const App = () => {
  const apiContext = useContext(ApiContext);
  return (
    <Container
      maxW={["container.sm", "container.md", "container.md", "container.lg"]}
    >
      <h1>RICK AND MORTY API</h1>
      <Searchbar />
      {apiContext?.loading && <>...Loading</>}
      {apiContext?.error && <>{apiContext.error}</>}
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={6}
      >
        {apiContext?.characters?.map((character) => (
          <GridItem key={character.id}>
            <CharacterCard character={character} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
