import { useContext } from "react";

import { ApiContext } from "../context/api";

const Searchbar = () => {
  const apiContext = useContext(ApiContext);
  return (
    <input
      value={apiContext?.searchCriteria}
      onChange={(e) => apiContext?.setSearchCriteria(e.target.value)}
    />
  );
};
export default Searchbar;
