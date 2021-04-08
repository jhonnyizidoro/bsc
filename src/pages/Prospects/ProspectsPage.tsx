import { FC, useEffect, useState } from 'react'
import { useApi } from '../../hooks/api'

import MainLayout from '../../Layouts/MainLayout'
import Title from '../../components/Title'
import Grid from '../../components/Grid'
import Card from '../../components/Card'

const ProspectsPage: FC = () => {
	const [prospects, setProspects] = useState<Prospect[]>([])
	const { get } = useApi()

	useEffect(() => {
		get<Prospect[]>('prospects').then(data => {
			if (data) {
				setProspects(data)
			}
		})
	}, [get])

	return (
		<MainLayout>
			<Title title="Perspectivas" />
			<Grid>
				{prospects.map(({ id, name }) => (
					<Card
						key={id}
						columns={3}
						onDelete={() => null}
						onEdit={() => null}
						title={name}
					/>
				))}
			</Grid>
		</MainLayout>
	)
}

export default ProspectsPage
