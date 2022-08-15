/** @format */

import type { AppProps } from 'next/app'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { GameProvider } from '../context/game-context'
import { Layout } from '../components/layout'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<GameProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</GameProvider>
		</QueryClientProvider>
	)
}

export default MyApp
