// components/ui/Footer/FooterLinkBlock.tsx
import { FC } from 'react'

import { CustomLink, FooterColumn } from '@/components'

import NestedLink from '../../Menu/NestedLink/NestedLink'

interface Props {
	title: string
	links: { link: string; text: string }[]
	isMobile: boolean
}

const FooterLinkBlock: FC<Props> = ({ title, links, isMobile }) => {
	if (isMobile) {
		return (
			<NestedLink
				rootLink={title}
				sublinks={links.map(link => link.text)}
			/>
		)
	}

	return (
		<FooterColumn title={title}>
			{links.map((link, index) => (
				<CustomLink
					key={index}
					link={link.link}
				>
					{link.text}
				</CustomLink>
			))}
		</FooterColumn>
	)
}

export default FooterLinkBlock
