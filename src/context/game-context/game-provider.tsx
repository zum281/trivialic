/** @format */

import React, { FunctionComponent as FC, useState } from 'react'
import { GameContext } from './game-context'

type Props = {
	children: React.ReactNode
}
export const GameProvider: FC<Props> = ({ children }) => {
	const [amount, setAmount] = useState(10)
	const [difficulty, setDifficulty] = React.useState('medium')

	const value = {
		amount,
		setAmount,
		difficulty,
		setDifficulty,
	}

	return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}
