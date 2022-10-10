/** @format */

import { useRouter } from 'next/router'
import React, { FunctionComponent as FC } from 'react'
import { useForm } from 'react-hook-form'
import { useGameContext } from '../../context/game-context'
import { Button } from '../../style/shared'
import { Options } from '../../types'
import {
	AMOUNT_OPTIONS,
	DEFAULT_OPTIONS,
	DIFFICULTY_OPTIONS,
} from './game-options.constants'
import { Select } from './select'

export const GameOptions: FC = () => {
	const router = useRouter()
	const { setAmount, setDifficulty } = useGameContext()
	const { control, handleSubmit } = useForm<Options>({
		defaultValues: DEFAULT_OPTIONS,
	})

	const onSubmit = (data: Options) => {
		setAmount(data.amount.value)
		setDifficulty(data.difficulty.value)
		router.push('/game')
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Select
				label="Number of questions"
				control={control}
				name="amount"
				options={AMOUNT_OPTIONS}
			/>
			<Select
				label="Difficulty"
				control={control}
				name="difficulty"
				options={DIFFICULTY_OPTIONS}
			/>
			<Button color="black" type="submit">
				Start game
			</Button>
		</form>
	)
}
