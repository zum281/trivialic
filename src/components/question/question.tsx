/** @format */

import React, { FunctionComponent as FC, useMemo, useState } from 'react'
import { Color, Question as QuestionType } from '../../types'
import { Answer } from '../answer'

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

	const coloredAnswers = useMemo(() => {
		return answers.map((answer) => {
			const color = answer === correct_answer ? 'green' : 'red'
			return {
				answer,
				color: !canUserAnswer ? color : 'black',
			}
		})
	}, [answers, canUserAnswer])

	const handleAnswerClick = (answer: string) => {
		if (answer === correct_answer) updateScore()
		setCanUserAnswer(false)
		updateAnsweredQuestions()
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<p dangerouslySetInnerHTML={{ __html: questionText }} />
			<div style={{ display: 'flex', gap: '1em' }}>
				{coloredAnswers.map((answer, idx) => (
					<Answer
						key={idx}
						answer={answer.answer}
						disabled={!canUserAnswer}
						handleAnswerClick={handleAnswerClick}
						color={answer.color as Color}
					/>
				))}
			</div>
		</div>
	)
}
