import { useGameStore } from "../store/useGameStore";
import { Square } from "./square";


export default function Board() {
  const xIsNext = useGameStore((state) => state.xIsNext)
  const setXIsnext = useGameStore((state) => state.setXIsNext)
  const squares = useGameStore((state) => state.squares)
  const setSquares = useGameStore((state) => state.setSquares)

  const player = xIsNext ? 'X' : 'O'
  const winner = calcWinner(squares)
  const turns = calculateTurns(squares)
  const status = calculateStatus(winner, turns, player)

  const handleSquareClick = (idx: number) => {
    if (squares[idx] || winner) return
    if (squares[idx]) return;

    const nextSquares = squares.slice()
    nextSquares[idx] = player;

    console.log("next Squares ", nextSquares)
    setXIsnext(!xIsNext)
    setSquares(nextSquares)
  }

  return (
    <>
      <div style={{ marginBottom: '0.5rem' }}>{status}</div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
          width: 'calc(3 * 2.5rem)',
          height: 'calc(3 * 2.5rem)',
          border: '1px solid #999',
        }}
      >
        {
          squares.map((value, key) => {
            return <Square key={key} value={value} onSquareClick={() => handleSquareClick(key)} />
          })
        }
      </div>
    </>
  )
}

// Helper function

const calcWinner = (squares: any[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }

  return null
};

const calculateTurns = (squares: string[]) => {
  return squares.filter((square) => !square).length
}

// @ts-ignore
const calculateStatus = (winner, turns, player) => {
  if (!winner && !turns) return 'Draw'
  if (winner) return `Winner ${winner}`
  return `Next player: ${player}`
}
