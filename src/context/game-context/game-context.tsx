/** @format */
import { createContext, useContext } from 'react'

type GameContextType = {
	amount: number
	setAmount: (amount: number) => void
	difficulty: string
	setDifficulty: (difficulty: string) => void
}

const initialValue = {
	amount: 10,
	setAmount: (amount: number) => {},
	difficulty: 'medium',
	setDifficulty: (difficulty: string) => {},
}

export const GameContext = createContext<GameContextType>(initialValue)

export const useGameContext = () => useContext(GameContext)
