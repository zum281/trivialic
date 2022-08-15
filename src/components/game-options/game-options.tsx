/** @format */

import { useRouter } from 'next/router'
import React, { FunctionComponent as FC } from 'react'
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { useGameContext } from '../../context/game-context'
export const GameOptions: FC = () => {
	const router = useRouter()
	const { setAmount, setDifficulty } = useGameContext()
	const { control, handleSubmit } = useForm<Options>({
		defaultValues: {
			difficulty: {
				value: 'medium',
				label: 'Medium',
			},
			amount: {
				value: 10,
				label: '10',
			},
		},
	})

	const onSubmit = (data: Options) => {
		setAmount(data.amount.value)
		setDifficulty(data.difficulty.value)
		router.push('/game')
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>
				Number of questions:
				<Controller
					name="amount"
					control={control}
					render={({ field }) => (
						<Select
							{...field}
							defaultValue={{ value: 10, label: '10' } as any}
							options={
								[
									{ value: 5, label: '5' },
									{ value: 10, label: '10' },
									{ value: 15, label: '15' },
									{ value: 20, label: '20' },
								] as any
							}
						/>
					)}
				/>
			</label>
			<label>
				Difficulty:
				<Controller
					name="difficulty"
					control={control}
					render={({ field }) => (
						<Select
							{...field}
							defaultValue={{ value: 'medium', label: 'Medium' } as any}
							options={
								[
									{ value: 'easy', label: 'Easy' },
									{ value: 'medium', label: 'Medium' },
									{ value: 'hard', label: 'Hard' },
								] as any
							}
						/>
					)}
				/>
			</label>
			<button type="submit">Start game</button>
		</form>
	)
}

type Options = {
	amount: {
		value: number
		label: string
	}
	difficulty: {
		value: string
		label: string
	}
	// category: string
	// type?: 'multiple' | 'boolean'
}
