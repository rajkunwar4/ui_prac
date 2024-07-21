import React from "react";
import Search from "./components/Search";
import Children from "./components/Children";

const App = () => {
  return (
    <div>
      {/* <Search /> */}
      <Children age={99}>
        <Search />
        <Search />
      </Children>
    </div>
  );
};

export default App;
