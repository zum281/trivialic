/** @format */

import React, { FunctionComponent as FC, useMemo, useState } from 'react'
import { Question as QuestionType } from '../../types'

type Props = {
	question: QuestionType
	updateScore: () => void
	updateAnsweredQuestions: () => void
}
export const Question: FC<Props> = ({
	question,
	updateScore,
	updateAnsweredQuestions,
}) => {
	const { question: questionText, correct_answer, incorrect_answers } = question
	const [canUserAnswer, setCanUserAnswer] = useState(true)

	const answers = useMemo(
		() =>
			[correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5),
		[question]
	)

	const handleAnswerClick = (answer: string) => {
		if (answer === correct_answer) updateScore()
		// disable answering after first click
		setCanUserAnswer(false)
		updateAnsweredQuestions()
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			{questionText}
			<div style={{ display: 'flex', gap: '1em' }}>
				{answers.map((answer, idx) => (
					<button
						key={idx}
						onClick={() => handleAnswerClick(answer)}
						disabled={!canUserAnswer}
					>
						{answer}
					</button>
				))}
			</div>
		</div>
	)
}
