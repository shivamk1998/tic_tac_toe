import React, { useState } from 'react';
import './App.css';
import Board from './components/Board/Board'
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import Modal from './components/Modal/Modal';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlaying, setXPlaying] = useState(true)
  const [xScore, setXScore] = useState(0)
  const [oScore, setOScore] = useState(0)
  const [tieScore, setTieScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [showModal, setShowModal] = useState(false)



  const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  function handleBoxClick(idx) {
    const updatedBoard = board.map((value, id) => {
      if (id === idx) {
        return xPlaying ? "X" : "O"
      } else {
        return value
      }

    })
    setBoard(updatedBoard)
    setXPlaying(!xPlaying)
    const winner = checkWinner(updatedBoard)
    if (winner) {
      if (winner === "X") {
        setXScore(xScore + 1)
        setGameOver(true)
      } else {
        setOScore(oScore + 1)
        setGameOver(true)
      }
    }
    let filled = true;
    updatedBoard.map((item) => {
      if (item === null) {
        filled = false
      }
    })
    if (filled && !winner) {
      setTieScore(tieScore + 1)
    }

  }


  function handleReset() {
    setGameOver(false)
    setBoard(Array(9).fill(null))


  }

  function handlePlayAgain() {
    setGameOver(false)
    setXScore(0)
    setOScore(0)
    setTieScore(0)
    setBoard(Array(9).fill(null))
  }

  //check for winner
  function checkWinner(board) {
    for (let i = 0; i < winningCondition.length; i++) {
      const [x, y, z] = winningCondition[i]
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        return board[x]
      }
    }

  }

  return (
    <div className="App">
      <ScoreBoard xScore={xScore} oScore={oScore} tieScore={tieScore} xPlaying={xPlaying}/>
      <Board board={board} onClick={gameOver === true ? handleReset : handleBoxClick} />
      
      <div className="buttonR">
        <button onClick={handleReset}>Play Again</button>
        <button onClick={handlePlayAgain}>Reset</button>
      </div>

      <button className="gameOver" onClick={() => setShowModal(!showModal)}>
        Game Over
      </button>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        xScore={xScore}
        oScore={oScore}
        handlePlayAgain={handlePlayAgain}
      />

    </div>
  );
}

export default App;
