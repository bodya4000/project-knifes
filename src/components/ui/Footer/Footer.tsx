import { FC } from 'react'

import useIsMobile from '@/hooks/useIsMobile'

import {
	ChoiceAdvice,
	EmailSubscribeForm,
	FooterColumn,
	FooterLinkBlock
} from '.'
import { CustomImage, CustomLink } from '..'
import common from '../../../styles/common.module.scss'
import styles from './Footer.module.scss'

const Footer: FC = () => {
	const isMobile = useIsMobile()

	const aboutUsLinks = [
		{ link: '/products_catalog', text: 'Our Story' },
		{ link: '/products_catalog', text: 'Craftsmanship & Tradition' },
		{ link: '/products_catalog', text: 'Our Team' },
		{ link: '/products_catalog', text: 'Testimonials' },
		{ link: '/products_catalog', text: 'Sustainability' }
	]

	const customerServiceLinks = [
		{ link: '/products_catalog', text: 'Shipping Information' },
		{ link: '/products_catalog', text: 'Return Policy' },
		{ link: '/products_catalog', text: 'Warranty & Repairs' },
		{ link: '/products_catalog', text: 'Order Tracking' },
		{ link: '/products_catalog', text: 'FAQs' }
	]

	const shopLinks = [
		{ link: '/products_catalog', text: 'New Arrivals' },
		{ link: '/products_catalog', text: 'Best Sellers' },
		{ link: '/products_catalog', text: 'Limited Editions' },
		{ link: '/products_catalog', text: 'Gift Cards' },
		{ link: '/products_catalog', text: 'Custom Knives' }
	]

	const connectWithUsLinks = [
		{ link: '/products_catalog', text: 'Contact Us' },
		{ link: '/products_catalog', text: 'Find a Store' },
		{ link: '/products_catalog', text: 'Follow Us on Instagram' },
		{ link: '/products_catalog', text: 'Join Our Newsletter' },
		{ link: '/products_catalog', text: 'Events & Workshops' }
	]

	const usefulLinks = [{ link: '/products_catalog', text: 'Payment and Shipping Methods' }]

	const ourGuarantee = [
		{
			link: '/products_catalog',
			text: 'Not satisfied with your purchase? You can return it within 30 days from the date of receipt, according to our policy.'
		}
	]

	return (
		<footer className={styles.footer}>
			<ChoiceAdvice />

			<div className={`${common._container} ${styles.footer__container}`}>
				{/* Top Section */}
				<section className={`${styles.footer__block} ${styles.footer__top}`}>
					<FooterLinkBlock
						title="ABOUT US"
						links={aboutUsLinks}
						isMobile={isMobile}
					/>
					<FooterLinkBlock
						title="CUSTOMER SERVICE"
						links={customerServiceLinks}
						isMobile={isMobile}
					/>
					<FooterLinkBlock
						title="SHOP"
						links={shopLinks}
						isMobile={isMobile}
					/>
					<FooterLinkBlock
						title="CONNECT WITH US"
						links={connectWithUsLinks}
						isMobile={isMobile}
					/>
				</section>

				{/* Bottom Section */}
				<section className={`${styles.footer__block} ${styles.footer__bottom}`}>
					<FooterColumn title="CONTACTS">
						<CustomLink link="/">
							<CustomImage
								src="assets/images/footer/phone.svg"
								alt="phone"
								propsStyles={styles.footer__bottom_icons}
							/>
							<div>+38 (099) 456-49-67</div>
						</CustomLink>
						<CustomLink link="/">
							<CustomImage
								src="assets/images/footer/clock.svg"
								alt="clock"
								propsStyles={styles.footer__bottom_icons}
							/>
							<div>Mon-Fri 7:00 - 16:00 (UTC)</div>
						</CustomLink>
						<CustomLink link="/">
							<CustomImage
								src="assets/images/footer/pin.svg"
								alt="location"
								propsStyles={styles.footer__bottom_icons}
							/>
							<div>UA Knives, Naukova St, 1, Office “6B”</div>
						</CustomLink>
						<CustomLink link="/">
							<CustomImage
								src="assets/images/footer/mail.svg"
								alt="email"
								propsStyles={styles.footer__bottom_icons}
							/>
							<div>info@zlatmax.ua</div>
						</CustomLink>
					</FooterColumn>

					<FooterLinkBlock
						title="USEFUL LINKS"
						links={usefulLinks}
						isMobile={isMobile}
					/>
					<FooterLinkBlock
						title="OUR GUARANTEE"
						links={ourGuarantee}
						isMobile={isMobile}
					/>

					<FooterColumn title="NEWSLETTER">
						<CustomLink
							noRedirect={true}
							link="/"
							propsStyles={styles.footer__email_subscribe}
						>
							Subscribe now!
						</CustomLink>
						<EmailSubscribeForm />
					</FooterColumn>
				</section>

				{/* Rights Section */}
				<section className={styles.footer__rights}>
					<div className={styles.footer__info}>
						All materials presented on the site are for informational purposes
						only and do not constitute a public offer as defined by Article 641
						of the Civil Code of Ukraine. When copying materials, a hyperlink to
						www.zlatmax.ua is mandatory!
					</div>

					<div>Zlatoust Knives www.zlatmax.ua ©</div>
				</section>
			</div>
		</footer>
	)
}

export default Footer
