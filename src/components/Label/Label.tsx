import { FC } from 'react'

import { LabelElement, LabelError } from './Label.styles'

interface LabelProps {
	htmlFor: string
	error?: string
}

const Label: FC<LabelProps> = ({ htmlFor, error, children }) => (
	<LabelElement htmlFor={htmlFor}>
		{children}
		{error && <LabelError> - {error}</LabelError>}
	</LabelElement>
)

export default Label
