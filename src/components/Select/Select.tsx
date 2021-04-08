import { ForwardRefRenderFunction, forwardRef, ChangeEvent, FocusEvent } from 'react'

import Fieldset from '../Fieldset'
import Label from '../Label'

import { ReactComponent as CaretDownIcon } from '../../assets/icons/caret-down.svg'

import { SelectElement, SelectIcon } from './Select.styles'

export interface SelectOption {
	label: string
	value: string
}

interface SelectProps {
	id: string
	name: string
	label: string
	error?: string
	placeholder: string
	defaultValue?: string
	options: SelectOption[]
	onBlur: (event: FocusEvent<HTMLSelectElement>) => void
	onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const Select: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (props, ref) => {
	const { id, label, error, options, placeholder, ...otherProps } = props

	return (
		<Fieldset>
			<Label htmlFor={id} error={error}>
				{label}
			</Label>
			<SelectElement id={id} ref={ref} {...otherProps}>
				<option value="">{placeholder}</option>
				{options.map(({ value, label }) => (
					<option key={value} value={value}>
						{label}
					</option>
				))}
			</SelectElement>
			<SelectIcon>
				<CaretDownIcon />
			</SelectIcon>
		</Fieldset>
	)
}

export default forwardRef(Select)
