/** @format */

import styled from '@emotion/styled'
import { Color } from '../types'

type ButtonProps = {
	color: Color
}

export const Button = styled.button<ButtonProps>`
	background-color: var(--clr-white);
	color: var(--clr-black);
	border: 1px solid var(--clr-black);
	padding: 10px 15px;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-size: 1rem;
	transition: all 0.3s ease-in-out;

	&:hover {
		background-color: var(--clr-primary);
		border: 1px solid var(--clr-primary);
		color: var(--clr-white);
	}

	&:disabled {
		background-color: ${(props) => {
			switch (props.color) {
				case 'red':
					return 'var(--clr-red)'
				case 'green':
					return 'var(--clr-green)'
				case 'black':
					return 'black'
				default:
					return 'var(--clr-white)'
			}
		}};
		border: 1px solid
			${(props) => {
				switch (props.color) {
					case 'red':
						return 'var(--clr-red)'
					case 'green':
						return 'var(--clr-green)'
					case 'black':
						return 'black'
					default:
						return 'var(--clr-white)'
				}
			}};
		color: var(--clr-white);
		cursor: not-allowed;
	}
`
