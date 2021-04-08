import { FC } from 'react'

import { ReactComponent as CancelIcon } from '../../assets/icons/cancel.svg'

import { ModalWrapper, ModalElement, ModalTitle, ModalClose } from './Modal.styles'

interface ModalProps {
	title: string
	isOpen: boolean
	onClose: () => void
}

const Modal: FC<ModalProps> = ({ title, onClose, children }) => (
	<ModalWrapper>
		<ModalElement>
			<ModalTitle>{title}</ModalTitle>
			{children}
			<ModalClose onClick={onClose}>
				<CancelIcon />
			</ModalClose>
		</ModalElement>
	</ModalWrapper>
)

export default Modal
