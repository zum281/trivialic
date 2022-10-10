/** @format */

import { Global, css } from '@emotion/react'

export const GlobalStyle = () => (
	<Global
		styles={css`
			:root {
				--clr-primary: #ffa00f;
				--clr-black: #333;
				--clr-white: #fff;
				--clr-red: #f25757;
				--clr-green: #06d6a0;
			}
			*,
			*::before,
			*::after {
				box-sizing: border-box;
				margin: 0;
				padding: 0;
			}
			body {
				font-family: 'Roboto', sans-serif;
				font-size: 1rem;
				font-weight: 400;
				line-height: 1.6;
				color: var(--clr-black);
				background-color: var(--clr-white);
			}
		`}
	/>
)
