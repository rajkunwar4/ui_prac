import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [char, setChar] = useState(false);
  const [number, setNumber] = useState(false);
  const [length, setLength] = useState(10);
  const [password, setPassword] = useState("");

  const passInput = useRef();

  
  const [counter, setCounter] = useState(0);

  function randomVal(size) {
    return Math.floor(Math.random() * size);
  }

  function passwordGenerator(size, number, char) {
    setCounter(counter + 1);
    console.log(counter);
    let alphabets = "";
    //capital
    for (let i = 65; i <= 90; i++) {
      alphabets += String.fromCharCode(i);
    }
    //non-capital
    for (let i = 97; i <= 122; i++) {
      alphabets += String.fromCharCode(i);
    }

    let characters = "";
    for (let i = 33; i <= 47; i++) {
      characters += String.fromCharCode(i);
    }

    let numbers = "";
    for (let i = 48; i <= 57; i++) {
      numbers += String.fromCharCode(i);
    }

    let long_string = alphabets;
    if (char) long_string += characters;
    if (number) long_string += numbers;

    const stringSize = long_string.length;

    let pass_string = "";
    for (let i = 0; i < size; i++) {
      pass_string += long_string[randomVal(stringSize)];
    }

    setPassword(pass_string);
    console.log(pass_string);
  }
  function copyClipboard(){
    navigator.clipboard.writeText(passInput.current.value);
    passInput.current.select();
    passInput.current.focus();
  }

  useEffect(() => {
    passwordGenerator(length, number, char);
  }, [length, char, number]);
  return (
    <div className="flex flex-col gap-10 items-center ">
      <h1 className="text-center">Passoword generator</h1>

      <div className="bg-black text-orange-500 p-4 flex flex-col justify-center items-center gap-2 max-w-lg rounded">
        <div>
          <input
            className="text-gray-500 px-2 w-[300px] py-1 outline-none rounded-l"
            type="text"
            readOnly
            value={password}
            ref={passInput}
          />
          <button className="bg-blue-500 px-2 py-1 text-black rounded-r" onClick={copyClipboard}>
            copy
          </button>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <div className="flex gap-2">
            {" "}
            <input
              type="range"
              min={5}
              max={20}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              value={length}
            />
            <label htmlFor="">Length({length})</label>
          </div>
          <div className="flex gap-1">
            <input
              type="checkbox"
              onChange={(e) => {
                setNumber(!number);
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className="flex gap-1">
            <input
              type="checkbox"
              onChange={() => {
                setChar(!char);
              }}
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
