import { useEffect, useState } from "react";

function App() {
  const arr = [];
  for (let i = 0; i < 9; i++) {
    arr.push("");
  }

  //state variables
  const [game, setGame] = useState(arr);
  const [turn, setTurn] = useState(true); //1: stands for 'x' , 0: stands for 'o'
  const [moves, setMoves] = useState(0);
  const [winner, setWinner] = useState(null);

  //logic functions

  function checkWinner(game) {
    let ans = "";
    if (game[0] == game[1] && game[0] == game[2]) {
      ans = game[0];
    } else if (game[3] == game[4] && game[3] == game[5]) {
      ans = game[3];
    } else if (game[6] == game[7] && game[6] == game[8]) {
      ans = game[6];
    } else if (game[0] == game[3] && game[0] == game[6]) {
      ans = game[0];
    } else if (game[1] == game[4] && game[1] == game[7]) {
      ans = game[1];
    } else if (game[2] == game[5] && game[2] == game[8]) {
      ans = game[2];
    } else if (game[0] == game[4] && game[0] == game[8]) {
      ans = game[0];
    } else if (game[2] == game[4] && game[2] == game[6]) {
      ans = game[2];
    }

    if (ans != "") {
      setWinner(ans);
    }
  }

  useEffect(() => {
    checkWinner(game);
  }, game);

  function moveHandler(i) {
    if (winner) return;
    setMoves(moves + 1);
    setGame(
      game.map((val, index) => {
        if (index == i) {
          if (turn) val = "o";
          else val = "x";
          setTurn(!turn);
        }
        return val;
      })
    );
  }

  function restartGame() {
    setGame(arr);
    setMoves(0);
    setTurn(true);
    setWinner(null);
  }

  return (
    <>
      <h1 className="text-center font-bold p-4 text-2xl">tic-tac-toe 🧠</h1>
      <div className="flex flex-col justify-center items-center mt-5 text-white font-bold text-2xl">
        <div className="flex  ">
          {[0, 1, 2].map((item, index) => (
            <div
              key={index}
              className="border w-28 h-28 flex items-center justify-center bg-gray-800"
              onClick={() => {
                moveHandler(index);
              }}
            >
              {game[index]}
            </div>
          ))}
        </div>
        <div className="flex  ">
          {[3, 4, 5].map((item, index) => (
            <div
              key={index}
              className="border w-28 h-28  flex items-center justify-center bg-gray-800"
              onClick={() => {
                moveHandler(index + 3);
              }}
            >
              {game[index + 3]}
            </div>
          ))}
        </div>
        <div className="flex  ">
          {[6, 7, 8].map((item, index) => (
            <div
              key={index}
              className="border w-28 h-28  flex items-center justify-center bg-gray-800"
              onClick={() => {
                moveHandler(index + 6);
              }}
            >
              {game[index + 6]}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center pt-10 gap-3">
        {winner ? (
          <span>
            The winner is <b className="text-xl font-bold">{winner} 👑</b>
          </span>
        ) : (
          <>
            {moves >= 9 ? (
              <div>
                {" "}
                <b className="text-lg">Game drawn!</b>
              </div>
            ) : null}
          </>
        )}
        <button
          className="bg-red-500 px-3 rounded font-semibold "
          onClick={restartGame}
        >
          restart
        </button>
      </div>
    </>
  );
}

export default App;
