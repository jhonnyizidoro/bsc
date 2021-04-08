import { FC } from 'react'

import { InlineFieldsetWrapper } from './InlineFieldset.styles'

const InlineFieldset: FC = ({ children }) => (
	<InlineFieldsetWrapper>{children}</InlineFieldsetWrapper>
)

export default InlineFieldset
