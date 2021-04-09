import { FC } from 'react'

import { ReactComponent as CopyIcon } from '../../assets/icons/copy.svg'

import {
	SignatureListWrapper,
	SignatureListItemWrapper,
	SignatureListItem,
	SignatureListIcon,
} from './SignatureList.styles'

interface SignatureListProps {
	signatures: Signature[]
	onItemSelect: (id: string) => void
}

const SignatureList: FC<SignatureListProps> = ({ signatures, onItemSelect }) => (
	<SignatureListWrapper>
		{signatures.map(({ id, name }) => (
			<SignatureListItemWrapper key={id}>
				<SignatureListItem onClick={() => onItemSelect(id)}>
					{name}
					<SignatureListIcon>
						<CopyIcon />
					</SignatureListIcon>
				</SignatureListItem>
			</SignatureListItemWrapper>
		))}
	</SignatureListWrapper>
)

export default SignatureList
