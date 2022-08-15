/** @format */

import React, { FunctionComponent as FC } from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'

type Props = {
	children: React.ReactNode
}
export const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Trivialic</title>
				<meta name="description" content="Trivia quiz app" />
			</Head>
			<Main>{children}</Main>
		</>
	)
}

const Main = styled.main`
	margin: 0 auto;
	max-width: 768px;
	padding: 0 32px;
`
