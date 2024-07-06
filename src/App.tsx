import { useContext } from "react";
import { ApiContext } from "./context/api";
import Searchbar from "./component/searchbar";

const App = () => {
  const apiContext = useContext(ApiContext);
  return (
    <>
      <Searchbar />
      {apiContext?.loading && <>...Loading</>}
      {apiContext?.error && <>{apiContext.error}</>}
    </>
  );
};

export default App;
