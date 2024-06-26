import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelected, updateBoard, i }) => { //Componente 
  const className = `square ${isSelected ? 'is-selected' : ''}`
  
  const handleClick = () => {
    updateBoard(i)
    console.log(i)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = (i) => {
    const newBoard = [... board]
    newBoard[i] = turn
    setBoard(newBoard)

    const newTurn = (turn == TURNS.X ? TURNS.O : TURNS.X)
    setTurn(newTurn)
  }

  return (
    <main className='board'>
      <h1>TRIQUI</h1>
      <section className='game'>
        {
          board.map((_, i) => {
            return (
              <Square key={i} i={i} updateBoard={updateBoard}>
                {board[i]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn == TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn == TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App
