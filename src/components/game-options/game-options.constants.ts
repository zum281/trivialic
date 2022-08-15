/** @format */

export const DEFAULT_AMOUNT = { value: 10, label: '10' }

export const AMOUNT_OPTIONS = [
	{ value: 5, label: '5' },
	DEFAULT_AMOUNT,
	{ value: 15, label: '15' },
	{ value: 20, label: '20' },
]

export const DEFAULT_DIFFICULTY = { value: 'medium', label: 'Medium' }

export const DIFFICULTY_OPTIONS = [
	{ value: 'easy', label: 'Easy' },
	DEFAULT_DIFFICULTY,
	{ value: 'hard', label: 'Hard' },
]

export const DEFAULT_OPTIONS = {
	amount: DEFAULT_AMOUNT,
	difficulty: DEFAULT_DIFFICULTY,
}
