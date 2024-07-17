import React, { useEffect, useState } from "react";

const App = () => {
  const items = [
    {
      name: "raj kunwar",
      email: "40rajkunwar@gmail.com",
    },
    {
      name: "hitesh jain",
      email: "hitman@gmail.com",
    },
  ];

  function searchPeople(input) {
    setDisplay(items.filter((item) => item.name.includes(input)));
  }

  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(items);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    searchPeople(search);
    if (display.length == 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }, [search]);
  return (
    <div>
      <h2>Search bar</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="search people"
      />
      {!empty ? (
        display.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <h4>{item.email}</h4>
            <hr />
          </div>
        ))
      ) : (
        <>
          <h3>NO USER FOUND</h3>
        </>
      )}
    </div>
  );
};

export default App;
