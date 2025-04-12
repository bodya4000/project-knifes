import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { normalizeLink } from '../utils/LinkUtills'

const useActiveLink = (links: string[]) => {
	const location = useLocation()
	const [active, setActive] = useState<string>('About')

	const setActiveLinkFromPath = (path: string) => {
		const foundLink = links.find(link => path.includes(normalizeLink(link)))
		if (foundLink) {
			setActive(foundLink)
		} else {
			setActive('/')
		}
	}

	useEffect(() => {
		console.log('Current path:', location.pathname)
		setActiveLinkFromPath(location.pathname.substring(1))
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [location])

	return { active, setActive }
}

export default useActiveLink
