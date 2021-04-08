import { ForwardRefRenderFunction, forwardRef } from 'react'

import Fieldset from '../Fieldset'
import Label from '../Label'

import { InputElement } from './Input.styles'

interface InputProps {
	id: string
	name: string
	label: string
	type: InputType
	placeholder: string
	inputMode: InputMode
	defaultValue?: string
	autoComplete: InputAutoComplete
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (props, ref) => {
	const {
		id,
		name,
		label,
		type,
		placeholder,
		inputMode,
		autoComplete,
		defaultValue,
	} = props

	return (
		<Fieldset>
			<Label htmlFor={id}>{label}</Label>
			<InputElement
				id={id}
				ref={ref}
				type={type}
				name={name}
				inputMode={inputMode}
				placeholder={placeholder}
				autoComplete={autoComplete}
				defaultValue={defaultValue}
			/>
		</Fieldset>
	)
}

export default forwardRef(Input)
