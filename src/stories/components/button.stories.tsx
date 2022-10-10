/** @format */

import styled from '@emotion/styled'
import { Layout } from '../../components/layout'
import { Button } from '../../style/shared'

export default {
	title: 'Components/Button',
	component: Button,
}

const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 1em;
`

export const BasicButton = () => (
	<Layout>
		<Container>
			<Button color="black">Click me</Button>
			<Button color="black" disabled>
				Click me
			</Button>
			<Button color="green" disabled>
				Click me
			</Button>
			<Button color="red" disabled>
				Click me
			</Button>
		</Container>
	</Layout>
)
