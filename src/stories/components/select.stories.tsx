/** @format */
import { AMOUNT_OPTIONS } from '../../components/game-options/game-options.constants'
import { Select } from '../../components/game-options/select'
import { useForm } from 'react-hook-form'

export default {
	title: 'Components/Select',
	component: Select,
}

export const Story = () => {
	const { control } = useForm<any>()
	return (
		<Select
			label="Select"
			control={control}
			name="amount"
			options={AMOUNT_OPTIONS}
		/>
	)
}
