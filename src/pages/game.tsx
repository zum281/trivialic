/** @format */

import { NextPage } from 'next'
import { useQuestions } from '../hooks/useQuestions'
const Game: NextPage = () => {
	const { data, isLoading } = useQuestions(10)
	if (isLoading) {
		return <div>Loading...</div>
	}

	console.log(data)
	return (
		<div>
			{data!.map((question, idx) => (
				<div key={idx}>{question.question}</div>
			))}
		</div>
	)
}

export default Game
