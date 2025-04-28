import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { KnifeBanner, ScreenSlider } from '@/components'

import CookBanner from './CookBanner/CookBanner'

const Welcome = () => {
	const location = useLocation()
	const welcomeRef = useRef<HTMLDivElement | null>(null)
	const [welcomeYPos, setWelcomeYPos] = useState<number | null>(null)

	useEffect(() => {
		if (welcomeRef.current) {
			setWelcomeYPos(welcomeRef.current.offsetTop)
		}
	}, [])

	useEffect(() => {
		if (welcomeYPos !== null) {
			window.scrollTo({ top: welcomeYPos - 85, behavior: 'smooth' })
		}
	}, [location, welcomeYPos])

	return (
		<section
			ref={welcomeRef}
			style={{ height: '110vh' }}
		>
			{/* <CookBanner />
			<KnifeBanner /> */}

			<ScreenSlider
				banners={{
					knife: <KnifeBanner />,
					cook: <CookBanner />
				}}
			/>
		</section>
	)
}

export default Welcome
