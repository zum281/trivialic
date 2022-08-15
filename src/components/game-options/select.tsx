/** @format */

import { FunctionComponent as FC } from 'react'
import { Control, Controller } from 'react-hook-form'
import { Options } from '../../types'
import ReactSelect from 'react-select'
import { DEFAULT_OPTIONS } from './game-options.constants'

type Props = {
	label: string
	control: Control<Options, any>
	name: keyof Options
	options: { value: number | string; label: string }[]
}

export const Select: FC<Props> = ({ control, name, label, options }) => {
	return (
		<label>
			{label}:
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<ReactSelect
						{...field}
						defaultValue={DEFAULT_OPTIONS[name]}
						options={options as any}
					/>
				)}
			/>
		</label>
	)
}
