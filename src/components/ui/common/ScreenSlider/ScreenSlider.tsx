import { useEffect, useRef, useState } from 'react'

import gsap from 'gsap'

interface Props {
	banners: Record<string, JSX.Element>
	interval?: number
}

const ScreenSlider = ({ banners, interval = 2000 }: Props) => {
	const [bannerList, setBannerList] = useState<string[]>([])
	const [currBannerIdx, setCurrBannerIdx] = useState(0)
	const sliderRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		let transformedBannerList: string[] = []
		for (const [key] of Object.entries(banners)) {
			transformedBannerList.push(key)
		}
		transformedBannerList = [...transformedBannerList, 'end']
		setBannerList(transformedBannerList)
	}, [])

	useEffect(() => {
		if (!sliderRef.current || bannerList.length == 0) return
		if (currBannerIdx == bannerList.length - 1) {
			setTimeout(() => {
				gsap.to(sliderRef.current, {
					x: 0,
					duration: 0,
					onComplete: () => {
						setCurrBannerIdx(0)
					}
				})
			}, interval)
		}
		if (currBannerIdx < bannerList.length - 1) {
			setTimeout(() => {
				gsap.to(sliderRef.current, {
					x: `-${(currBannerIdx + 1) * 100}vw`,
					duration: 1,
					ease: 'power2.inOut',
					onComplete: () => {
						setCurrBannerIdx(prev => prev + 1)
					}
				})
			}, interval)
		}
	}, [bannerList, currBannerIdx])

	return (
		<div
			ref={sliderRef}
			style={{
				display: 'flex',
				height: '100%'
			}}
		>
			{bannerList.map((banner, index) => (
				<div
					key={`${banner}-${index}`}
					style={{ flexShrink: 0, width: '100vw', height: '100%' }}
				>
					{banners[banner]}
					{banner == 'end' && banners[bannerList[0]]}
				</div>
			))}
		</div>
	)
}

export default ScreenSlider
