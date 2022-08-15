/** @format */

import type { AppProps } from 'next/app'
import { GlobalStyle } from '../style/global'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { GameProvider } from '../context/game-context'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<GameProvider>
				<GlobalStyle />
				<Component {...pageProps} />
			</GameProvider>
		</QueryClientProvider>
	)
}

export default MyApp
