import { FC } from 'react'

import { LabelElement } from './Label.styles'

interface LabelProps {
	htmlFor: string
}

const Label: FC<LabelProps> = ({ htmlFor, children }) => (
	<LabelElement htmlFor={htmlFor}>{children}</LabelElement>
)

export default Label
