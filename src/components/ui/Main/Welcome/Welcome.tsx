import { KnifeBanner, ScreenSlider } from '@/components'

import CookBanner from './CookBanner/CookBanner'

const Welcome = () => {
	return (
		<ScreenSlider
			banners={{
				knife: <KnifeBanner />,
				cool: <CookBanner />
			}}
		/>
	)
}

export default Welcome
