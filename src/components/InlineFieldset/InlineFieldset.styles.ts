import styled from 'styled-components'

export const InlineFieldsetWrapper = styled.div`
	display: flex;

	fieldset {
		flex-grow: 1;
	}

	fieldset:not(:last-child) {
		margin-right: 25px;
	}
`
