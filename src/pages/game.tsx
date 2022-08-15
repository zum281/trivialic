/** @format */

import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Question } from '../components/question'
import { useQuestions } from '../hooks/useQuestions'
import { useQueryClient } from '@tanstack/react-query'

const NUMBER_OF_QUESTIONS = 10
const Game: NextPage = () => {
	const queryClient = useQueryClient()
	const { data, isLoading } = useQuestions(10)
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
			{answeredQuestions !== NUMBER_OF_QUESTIONS &&
				data!.map((question, idx) => (
					<Question
						key={idx}
						question={question}
						updateScore={updateScore}
						updateAnsweredQuestions={updateAnsweredQuestions}
					/>
				))}
			{answeredQuestions === NUMBER_OF_QUESTIONS && (
				<div>
					<h1>
						You scored {score} out of {NUMBER_OF_QUESTIONS}
					</h1>
					<button onClick={restart}>Restart</button>
				</div>
			)}
		</>
	)
}

export default Game
