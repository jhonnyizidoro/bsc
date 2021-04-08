import { ForwardRefRenderFunction, forwardRef, ChangeEvent, FocusEvent } from 'react'

import Fieldset from '../Fieldset'
import Label from '../Label'

import { TextareaElement } from './Textarea.styles'

interface TextareaProps {
	id: string
	name: string
	label: string
	error?: string
	placeholder: string
	defaultValue?: string | number
	onBlur: (event: ChangeEvent<HTMLTextAreaElement>) => void
	onChange: (event: FocusEvent<HTMLTextAreaElement>) => void
}

const Textarea: ForwardRefRenderFunction<HTMLTextAreaElement, TextareaProps> = (
	props,
	ref
) => {
	const { id, label, error, ...otherProps } = props

	return (
		<Fieldset>
			<Label htmlFor={id} error={error}>
				{label}
			</Label>
			<TextareaElement id={id} ref={ref} {...otherProps} />
		</Fieldset>
	)
}

export default forwardRef(Textarea)
