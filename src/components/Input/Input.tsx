import { ForwardRefRenderFunction, forwardRef, ChangeEvent, FocusEvent } from 'react'

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
	onBlur: (event: ChangeEvent<HTMLInputElement>) => void
	onChange: (event: FocusEvent<HTMLInputElement>) => void
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (props, ref) => {
	const { id, label, ...otherProps } = props

	return (
		<Fieldset>
			<Label htmlFor={id}>{label}</Label>
			<InputElement id={id} ref={ref} {...otherProps} />
		</Fieldset>
	)
}

export default forwardRef(Input)
