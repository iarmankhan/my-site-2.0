"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Link from "next/link"
import { ArrowLeft, RotateCcw } from "lucide-react"

const GRID_SIZE = 20
const CELL_SIZE = 20
const INITIAL_SNAKE = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 },
]

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT"
type Position = { x: number; y: number }

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE)
  const [direction, setDirection] = useState<Direction>("RIGHT")
  const [food, setFood] = useState<Position>({ x: 15, y: 15 })
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const gameLoopRef = useRef<number | undefined>(undefined)

  const generateFood = useCallback((): Position => {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    }
  }, [])

  const checkCollision = useCallback(
    (head: Position, body: Position[]): boolean => {
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        return true
      }
      return body.some((segment) => segment.x === head.x && segment.y === head.y)
    },
    []
  )

  const gameLoop = useCallback(() => {
    if (gameOver || !gameStarted) return

    setSnake((prevSnake) => {
      const head = { ...prevSnake[0] }

      switch (direction) {
        case "UP":
          head.y -= 1
          break
        case "DOWN":
          head.y += 1
          break
        case "LEFT":
          head.x -= 1
          break
        case "RIGHT":
          head.x += 1
          break
      }

      const newSnake = [head, ...prevSnake]

      if (checkCollision(head, prevSnake)) {
        setGameOver(true)
        return prevSnake
      }

      if (head.x === food.x && head.y === food.y) {
        setScore((prev) => prev + 1)
        setFood(generateFood())
      } else {
        newSnake.pop()
      }

      return newSnake
    })
  }, [direction, food, gameOver, gameStarted, checkCollision, generateFood])

  useEffect(() => {
    if (!gameStarted || gameOver) return

    const interval = setInterval(() => {
      gameLoop()
    }, 150)

    return () => clearInterval(interval)
  }, [gameLoop, gameStarted, gameOver])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.strokeStyle = "black"
    ctx.lineWidth = 2
    ctx.strokeRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "black"
    snake.forEach((segment, index) => {
      if (index === 0) {
        ctx.fillStyle = "#333"
      } else {
        ctx.fillStyle = "black"
      }
      ctx.fillRect(
        segment.x * CELL_SIZE + 2,
        segment.y * CELL_SIZE + 2,
        CELL_SIZE - 4,
        CELL_SIZE - 4
      )
    })

    ctx.fillStyle = "red"
    ctx.fillRect(
      food.x * CELL_SIZE + 2,
      food.y * CELL_SIZE + 2,
      CELL_SIZE - 4,
      CELL_SIZE - 4
    )
  }, [snake, food])

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (!gameStarted && e.key.startsWith("Arrow")) {
        setGameStarted(true)
      }

      if (gameOver) return

      switch (e.key) {
        case "ArrowUp":
          if (direction !== "DOWN") setDirection("UP")
          break
        case "ArrowDown":
          if (direction !== "UP") setDirection("DOWN")
          break
        case "ArrowLeft":
          if (direction !== "RIGHT") setDirection("LEFT")
          break
        case "ArrowRight":
          if (direction !== "LEFT") setDirection("RIGHT")
          break
      }
    },
    [direction, gameOver, gameStarted]
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [handleKeyPress])

  const resetGame = () => {
    setSnake(INITIAL_SNAKE)
    setDirection("RIGHT")
    setFood(generateFood())
    setScore(0)
    setGameOver(false)
    setGameStarted(false)
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
              SNAKE
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

        <div className="flex justify-center">
          <div className="relative">
            <canvas
              ref={canvasRef}
              width={GRID_SIZE * CELL_SIZE}
              height={GRID_SIZE * CELL_SIZE}
              className="brutalist-border bg-white"
            />
            {!gameStarted && !gameOver && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/95 brutalist-border">
                <div className="text-center p-8">
                  <p className="text-xl font-bold text-black uppercase">
                    Press Arrow Key to Start
                  </p>
                </div>
              </div>
            )}
            {gameOver && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/95 brutalist-border">
                <div className="text-center p-8 space-y-4">
                  <p className="text-3xl font-bold text-black uppercase">Game Over!</p>
                  <p className="text-xl text-black">
                    <span className="font-bold">Final Score: </span>
                    <span className="text-2xl font-bold">{score}</span>
                  </p>
                  <button
                    onClick={resetGame}
                    className="brutalist-border px-8 py-3 bg-black text-white hover:bg-yellow-400 hover:text-black transition-all duration-300 font-bold uppercase text-sm"
                  >
                    Play Again →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 brutalist-border p-6 bg-white">
          <p className="text-sm font-bold text-black uppercase tracking-wide mb-2">
            How to Play:
          </p>
          <p className="text-sm text-black/70 leading-relaxed">
            Use arrow keys to control the snake. Eat the red food to grow and increase your score. 
            Avoid hitting the walls or yourself!
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

