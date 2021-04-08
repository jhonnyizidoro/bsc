import React, { ForwardRefRenderFunction, forwardRef } from 'react'

import Fieldset from '../Fieldset'
import Label from '../Label'

import { InputElement } from './Input.styles'

interface InputProps {
	id: string
	name: string
	label: string
	type: InputType
	disabled?: boolean
	inputMode: InputMode
	defaultValue?: string
	autoComplete: InputAutoComplete
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (props, ref) => {
	const { id, name, label, type, disabled, inputMode, autoComplete, defaultValue } = props

	return (
		<Fieldset>
			<Label htmlFor={id}>{label}</Label>
			<InputElement
				id={id}
				ref={ref}
				type={type}
				name={name}
				disabled={disabled}
				inputMode={inputMode}
				autoComplete={autoComplete}
				defaultValue={defaultValue}
			/>
		</Fieldset>
	)
}

export default forwardRef(Input)
