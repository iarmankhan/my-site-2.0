"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { ArrowLeft, RotateCcw } from "lucide-react"

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT"

const GRID_SIZE = 4

function createEmptyGrid(): number[][] {
  return Array(GRID_SIZE)
    .fill(null)
    .map(() => Array(GRID_SIZE).fill(0))
}

function addRandomTile(grid: number[][]): number[][] {
  const emptyCells: { row: number; col: number }[] = []
  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      if (grid[row][col] === 0) {
        emptyCells.push({ row, col })
      }
    }
  }

  if (emptyCells.length === 0) return grid

  const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
  const newGrid = grid.map((row) => [...row])
  newGrid[randomCell.row][randomCell.col] = Math.random() < 0.9 ? 2 : 4

  return newGrid
}

function moveLeft(grid: number[][]): { grid: number[][]; moved: boolean; score: number } {
  const newGrid = grid.map((row) => [...row])
  let moved = false
  let score = 0

  for (let row = 0; row < GRID_SIZE; row++) {
    const filtered = newGrid[row].filter((val) => val !== 0)
    const merged: number[] = []

    for (let i = 0; i < filtered.length; i++) {
      if (i < filtered.length - 1 && filtered[i] === filtered[i + 1]) {
        const mergedValue = filtered[i] * 2
        merged.push(mergedValue)
        score += mergedValue
        i++
        moved = true
      } else {
        merged.push(filtered[i])
        if (filtered[i] !== newGrid[row][i]) moved = true
      }
    }

    while (merged.length < GRID_SIZE) {
      merged.push(0)
    }

    newGrid[row] = merged
  }

  return { grid: newGrid, moved, score }
}

function rotateGrid(grid: number[][]): number[][] {
  const rotated = createEmptyGrid()
  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      rotated[col][GRID_SIZE - 1 - row] = grid[row][col]
    }
  }
  return rotated
}

function move(grid: number[][], direction: Direction): { grid: number[][]; moved: boolean; score: number } {
  let rotatedGrid = grid
  let rotations = 0

  switch (direction) {
    case "RIGHT":
      rotatedGrid = rotateGrid(grid)
      rotations = 1
      break
    case "UP":
      rotatedGrid = rotateGrid(rotateGrid(grid))
      rotations = 2
      break
    case "DOWN":
      rotatedGrid = rotateGrid(rotateGrid(rotateGrid(grid)))
      rotations = 3
      break
  }

  const result = moveLeft(rotatedGrid)

  let finalGrid = result.grid
  for (let i = 0; i < (4 - rotations) % 4; i++) {
    finalGrid = rotateGrid(finalGrid)
  }

  return { grid: finalGrid, moved: result.moved, score: result.score }
}

function canMove(grid: number[][]): boolean {
  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      if (grid[row][col] === 0) return true
      if (row < GRID_SIZE - 1 && grid[row][col] === grid[row + 1][col]) return true
      if (col < GRID_SIZE - 1 && grid[row][col] === grid[row][col + 1]) return true
    }
  }
  return false
}

function hasWon(grid: number[][]): boolean {
  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      if (grid[row][col] === 2048) return true
    }
  }
  return false
}

export default function Game2048() {
  const [grid, setGrid] = useState<number[][]>(() => {
    const initial = createEmptyGrid()
    return addRandomTile(addRandomTile(initial))
  })
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [won, setWon] = useState(false)

  const handleMove = useCallback(
    (direction: Direction) => {
      if (gameOver && !won) return

      const result = move(grid, direction)
      if (result.moved) {
        const newGrid = addRandomTile(result.grid)
        setGrid(newGrid)
        setScore((prev) => prev + result.score)

        if (hasWon(newGrid) && !won) {
          setWon(true)
        }

        if (!canMove(newGrid)) {
          setGameOver(true)
        }
      }
    },
    [grid, gameOver, won]
  )

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          e.preventDefault()
          handleMove("UP")
          break
        case "ArrowDown":
          e.preventDefault()
          handleMove("DOWN")
          break
        case "ArrowLeft":
          e.preventDefault()
          handleMove("LEFT")
          break
        case "ArrowRight":
          e.preventDefault()
          handleMove("RIGHT")
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [handleMove])

  const resetGame = () => {
    const initial = createEmptyGrid()
    setGrid(addRandomTile(addRandomTile(initial)))
    setScore(0)
    setGameOver(false)
    setWon(false)
  }

  const getTileColor = (value: number): string => {
    const colors: Record<number, string> = {
      2: "bg-gray-100",
      4: "bg-gray-200",
      8: "bg-yellow-200",
      16: "bg-yellow-300",
      32: "bg-orange-200",
      64: "bg-orange-300",
      128: "bg-pink-200",
      256: "bg-pink-300",
      512: "bg-red-200",
      1024: "bg-red-300",
      2048: "bg-green-300",
    }
    return colors[value] || "bg-gray-100"
  }

  return (
    <div className="relative min-h-screen bg-white pt-20">
      <div className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 text-black hover:bg-yellow-400 px-4 py-2 brutalist-border mb-12 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-bold text-sm uppercase">Back to Apps</span>
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-block px-4 py-2 bg-yellow-400 brutalist-border mb-4">
              <span className="font-bold text-black uppercase text-sm tracking-wide">
                Game
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
              2048
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <div className="brutalist-border px-6 py-3 bg-white">
                <span className="text-sm font-bold text-black/70 uppercase tracking-wide">Score: </span>
                <span className="text-2xl font-bold text-black">{score}</span>
              </div>
              <button
                onClick={resetGame}
                className="inline-flex items-center gap-2 brutalist-border px-6 py-3 bg-black text-white hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                <RotateCcw className="w-5 h-5" />
                <span className="font-bold uppercase text-sm">Restart</span>
              </button>
            </div>
          </div>

        <div className="flex justify-center mb-8">
          <div className="brutalist-border p-2 bg-white">
            <div className="grid grid-cols-4 gap-2">
              {grid.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center brutalist-border-thin ${
                      cell === 0 ? "bg-gray-50" : getTileColor(cell)
                    }`}
                  >
                    {cell !== 0 && (
                      <span
                        className={`text-lg sm:text-xl font-bold ${
                          cell >= 128 ? "text-white" : "text-black"
                        }`}
                      >
                        {cell}
                      </span>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {won && !gameOver && (
          <div className="mb-4 brutalist-border p-4 bg-green-100">
            <p className="text-lg font-bold text-black">You won! Keep playing to reach a higher score.</p>
          </div>
        )}

        {gameOver && (
          <div className="mb-4 brutalist-border p-4 bg-red-100">
            <p className="text-lg font-bold text-black">Game Over! No more moves available.</p>
          </div>
        )}

        <div className="brutalist-border p-4 bg-white">
          <p className="text-sm text-black">
            <strong>How to play:</strong> Use arrow keys to move tiles. When two tiles with the same
            number touch, they merge into one. Reach 2048 to win!
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

