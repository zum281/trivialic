/** @format */
import { useQuery } from '@tanstack/react-query'

type Question = {
	category: string
	correct_answer: string
	difficulty: string
	incorrect_answers: string[]
	question: string
	type: string
}

const API_URL = 'https://opentdb.com'
const fetchQuestions = async (amount: number): Promise<Question[]> => {
	try {
		const res = await fetch(`${API_URL}/api.php?amount=${amount}`)
		if (res.ok) {
			const data = await res.json()
			return data.results
		} else {
			throw new Error('Something went wrong')
		}
	} catch (e: any) {
		throw new Error(e.message)
	}
}

export const useQuestions = (amount: number) =>
	useQuery(['questions'], () => fetchQuestions(amount))
