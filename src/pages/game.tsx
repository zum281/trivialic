/** @format */

import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Question } from '../components/question'
import { useQuestions } from '../hooks/useQuestions'
import { useQueryClient } from '@tanstack/react-query'
import { useGameContext } from '../context/game-context'

const Game: NextPage = () => {
	const queryClient = useQueryClient()
	const { amount } = useGameContext()
	const { data, isLoading } = useQuestions()
	const [score, setScore] = useState(0)
	const [answeredQuestions, setAnsweredQuestions] = useState<number>(0)

	const updateScore = () => setScore((score) => score + 1)
	const updateAnsweredQuestions = () =>
		setAnsweredQuestions((answeredQuestions) => answeredQuestions + 1)

	const restart = () => {
		setScore(0)
		setAnsweredQuestions(0)
		queryClient.resetQueries(['questions'])
	}

	useEffect(() => console.log(`isLoading: ${isLoading}`), [isLoading])

	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		<>
			{answeredQuestions !== amount &&
				data!.map((question, idx) => (
					<Question
						key={idx}
						question={question}
						updateScore={updateScore}
						updateAnsweredQuestions={updateAnsweredQuestions}
					/>
				))}
			{answeredQuestions === amount && (
				<div>
					<h1>
						You scored {score} out of {amount}
					</h1>
					<button onClick={restart}>Play again</button>
				</div>
			)}
		</>
	)
}

export default Game
