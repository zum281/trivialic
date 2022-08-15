/** @format */

export type Question = {
	category: string
	correct_answer: string
	difficulty: string
	incorrect_answers: string[]
	question: string
	type: string
}

export type Options = {
	amount: {
		value: number
		label: string
	}
	difficulty: {
		value: string
		label: string
	}
	// category: string
	// type?: 'multiple' | 'boolean'
}
