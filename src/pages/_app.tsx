/** @format */

import type { AppProps } from 'next/app'
import { GlobalStyle } from '../style/global'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<GlobalStyle />
			<Component {...pageProps} />
		</QueryClientProvider>
	)
}

export default MyApp
