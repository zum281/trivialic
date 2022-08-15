/** @format */
import { useQuery } from '@tanstack/react-query'
import { Question } from '../types'

const API_URL = 'https://opentdb.com'

const fetchQuestions = async (amount: number): Promise<Question[]> => {
	try {
		const res = await fetch(`${API_URL}/api.php?amount=${amount}`)
		if (res.ok) {
			const data = await res.json()
			return data.results
		} else {
			throw new Error(`${res.status} ${res.statusText}`)
		}
	} catch (e: any) {
		throw new Error(e.message)
	}
}

export const useQuestions = (amount: number) =>
	useQuery(['questions'], () => fetchQuestions(amount))
