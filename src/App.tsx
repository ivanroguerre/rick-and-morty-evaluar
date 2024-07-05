import { useContext } from "react";
import { ApiContext } from "./context/api";

const App = () => {
  const apiContext = useContext(ApiContext);
  return <>{JSON.stringify(apiContext!.characters)}</>;
};

export default App;
