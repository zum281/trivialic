/** @format */

import React, {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	FunctionComponent as FC,
} from 'react'
import { Button } from '../../style/shared'
import { Color } from '../../types'

type Props = {
	answer: string
	handleAnswerClick: (answer: string) => void
	color: Color
} & DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>
>

export const Answer: FC<Props> = ({
	answer,
	handleAnswerClick,
	color,
	...rest
}) => {
	return (
		<Button
			onClick={() => handleAnswerClick(answer)}
			color={color}
			dangerouslySetInnerHTML={{ __html: answer }}
			{...rest}
		/>
	)
}
