import { FC } from 'react'

import { TitleWrapper, TitleElement, TitleContent } from './Title.styles'

interface TitleProps {
	title: string
}

const Title: FC<TitleProps> = ({ title, children }) => (
	<TitleWrapper>
		<TitleElement>{title}</TitleElement>
		<TitleContent>{children}</TitleContent>
	</TitleWrapper>
)

export default Title
