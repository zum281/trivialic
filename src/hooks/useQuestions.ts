/** @format */
import { useQuery } from '@tanstack/react-query'
import { useGameContext } from '../context/game-context'
import { Question } from '../types'

const API_URL = 'https://opentdb.com'

const fetchQuestions = async (
	amount: number,
	difficulty: string
): Promise<Question[]> => {
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

export const useQuestions = () => {
	const { amount, difficulty } = useGameContext()
	return useQuery(['questions'], () => fetchQuestions(amount, difficulty))
}
