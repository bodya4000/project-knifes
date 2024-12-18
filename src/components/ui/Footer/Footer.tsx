import { FC } from 'react';
import ChoiceAdvice from './ChoiceAdvise/ChoiceAdvice';

import common from '../../../styles/common.module.scss';
import CustomImage from '../common/CustomImage/CustomImage';
import CustomLink from '../common/CustomLink/CustomLink';
import EmailSubscribeForm from './EmailSubscribeForm/EmailSubscribeForm';
import styles from './Footer.module.scss';
import FooterColumn from './FooterColumn';

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<ChoiceAdvice />

			<div className={`${common._container} ${styles.footer__container}`}>
				{/* Top Section */}
				<section className={`${styles.footer__block} ${styles.footer__top}`}>
					<FooterColumn title='ABOUT US'>
						<CustomLink link='/'>Our Story</CustomLink>
						<CustomLink link='/'>Craftsmanship & Tradition</CustomLink>
						<CustomLink link='/'>Our Team</CustomLink>
						<CustomLink link='/'>Testimonials</CustomLink>
						<CustomLink link='/'>Sustainability</CustomLink>
					</FooterColumn>

					<FooterColumn title='CUSTOMER SERVICE'>
						<CustomLink link='/'>Shipping Information</CustomLink>
						<CustomLink link='/'>Return Policy</CustomLink>
						<CustomLink link='/'>Warranty & Repairs</CustomLink>
						<CustomLink link='/'>Order Tracking</CustomLink>
						<CustomLink link='/'>FAQs</CustomLink>
					</FooterColumn>

					<FooterColumn title='SHOP'>
						<CustomLink link='/'>New Arrivals</CustomLink>
						<CustomLink link='/'>Best Sellers</CustomLink>
						<CustomLink link='/'>Limited Editions</CustomLink>
						<CustomLink link='/'>Gift Cards</CustomLink>
						<CustomLink link='/'>Custom Knives</CustomLink>
					</FooterColumn>

					<FooterColumn title='CONNECT WITH US'>
						<CustomLink link='/'>Contact Us</CustomLink>
						<CustomLink link='/'>Find a Store</CustomLink>
						<CustomLink link='/'>Follow Us on Instagram</CustomLink>
						<CustomLink link='/'>Join Our Newsletter</CustomLink>
						<CustomLink link='/'>Events & Workshops</CustomLink>
					</FooterColumn>
				</section>

				{/* Bottom Section */}
				<section className={`${styles.footer__block} ${styles.footer__bottom}`}>
					<FooterColumn title='CONTACTS'>
						<CustomLink link='/'>
							<CustomImage
								src='src/assets/images/footer/phone.svg'
								alt='phone'
								propsStyles={`${styles.footer__bottom_icons}`}
							/>
							<div>8 (800) 777-49-67</div>
						</CustomLink>
						<CustomLink link='/'>
							<CustomImage
								src='src/assets/images/footer/clock.svg'
								alt='clock'
								propsStyles={`${styles.footer__bottom_icons}`}
							/>
							<div>Mon-Fri 7:00 - 16:00 (UTC)</div>
						</CustomLink>
						<CustomLink link='/'>
							<CustomImage
								src='src/assets/images/footer/pin.svg'
								alt='location'
								propsStyles={`${styles.footer__bottom_icons}`}
							/>
							<div>Zlatoust, Shosseynaya St, 1, Office “6B”</div>
						</CustomLink>
						<CustomLink link='/'>
							<CustomImage
								src='src/assets/images/footer/mail.svg'
								alt='email'
								propsStyles={`${styles.footer__bottom_icons}`}
							/>
							<div>info@zlatmax.ru</div>
						</CustomLink>
					</FooterColumn>

					<FooterColumn title='USEFUL LINKS'>
						<CustomLink link='/'>Payment and Shipping Methods</CustomLink>
					</FooterColumn>

					<FooterColumn title='OUR GUARANTEE'>
						<CustomLink
							propsStyles={styles.footer__block_column_inline}
							link='/'
						>
							Not satisfied with your purchase? You can return it within 30 days
							from the date of receipt, according to our policy.
						</CustomLink>
					</FooterColumn>

					<FooterColumn title='NEWSLETTER'>
						<CustomLink
							noRedirect={true}
							link='/'
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
	);
};

export default Footer;
