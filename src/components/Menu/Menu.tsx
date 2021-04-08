import { FC } from 'react'

import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg'
import { ReactComponent as ClockIcon } from '../../assets/icons/clock.svg'
import { ReactComponent as PuzzleIcon } from '../../assets/icons/puzzle.svg'
import { ReactComponent as FlagIcon } from '../../assets/icons/flag.svg'
import { ReactComponent as CrosshairIcon } from '../../assets/icons/crosshair.svg'
import { ReactComponent as ListIcon } from '../../assets/icons/list.svg'
import { ReactComponent as UsersIcon } from '../../assets/icons/users.svg'
import { ReactComponent as BriefcaseIcon } from '../../assets/icons/briefcase.svg'

import { MenuElement, MenuLink } from './Menu.styles'

const links = [
	{ to: '/generate-bsc', label: 'Gerar BSC', icon: PlusIcon },
	{ to: '/generated-bsc', label: 'BSCs Gerados', icon: ClockIcon },
	{ to: '/prospects', label: 'Perspectivas', icon: PuzzleIcon },
	{ to: '/goals', label: 'Objetivos', icon: FlagIcon },
	{ to: '/indicators', label: 'Indicadores', icon: CrosshairIcon },
	{ to: '/signatures', label: 'Rúbricas', icon: ListIcon },
	{ to: '/users', label: 'Usuários', icon: UsersIcon },
	{ to: '/companies', label: 'Empresas', icon: BriefcaseIcon },
]

const Menu: FC = () => (
	<MenuElement>
		{links.map(({ to, label, icon: LinkIcon }) => (
			<MenuLink key={to} to={to} activeClassName="is-active">
				<LinkIcon />
				{label}
			</MenuLink>
		))}
	</MenuElement>
)

export default Menu
