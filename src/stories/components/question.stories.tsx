/** @format */
import { Question } from '../../components/question'

export default {
	title: 'Components/Question',
	component: Question,
}

const question = {
	category: 'Entertainment: Film',
	type: 'multiple',
	difficulty: 'easy',
	question:
		'Which of the following is not the name of a &quot;Bond Girl&quot;? ',
	correct_answer: 'Vanessa Kensington',
	incorrect_answers: ['Pam Bouvier', 'Mary Goodnight', 'Wai Lin'],
}

export const Story = () => (
	<Question
		question={question}
		updateAnsweredQuestions={() => {}}
		updateScore={() => {}}
	/>
)
