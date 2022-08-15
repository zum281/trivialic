/** @format */

import React, {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	FunctionComponent as FC,
} from 'react'

type Props = {
	answer: string
	handleAnswerClick: (answer: string) => void
} & DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>
>

export const Answer: FC<Props> = ({
	answer,
	handleAnswerClick,

	...rest
}) => {
	return (
		<button
			onClick={() => handleAnswerClick(answer)}
			{...rest}
			dangerouslySetInnerHTML={{ __html: answer }}
		/>
	)
}
