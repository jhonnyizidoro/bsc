import { FC } from 'react'

import { CenteredCardWrapper, CenteredCardElement } from './CenteredCard.styles'

const CenteredCard: FC = ({ children }) => (
	<CenteredCardWrapper>
		<CenteredCardElement>{children}</CenteredCardElement>
	</CenteredCardWrapper>
)

export default CenteredCard
