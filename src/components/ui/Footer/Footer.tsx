import { FC } from 'react';
import ChoiceAdvice from './ChoiceAdvise/ChoiceAdvice';

import useIsMobile from '../../../hooks/useIsMobile';
import common from '../../../styles/common.module.scss';
import CustomImage from '../common/CustomImage/CustomImage';
import CustomLink from '../common/CustomLink/CustomLink';
import NestedLink from '../Menu/Drawer/NestedLink/NestedLink';
import EmailSubscribeForm from './EmailSubscribeForm/EmailSubscribeForm';
import styles from './Footer.module.scss';
import FooterColumn from './FooterColumn';

const Footer: FC = () => {
	const isMobile = useIsMobile();

	const aboutUsLinks = [
		{ link: '/', text: 'Our Story' },
		{ link: '/', text: 'Craftsmanship & Tradition' },
		{ link: '/', text: 'Our Team' },
		{ link: '/', text: 'Testimonials' },
		{ link: '/', text: 'Sustainability' },
	];

	const customerServiceLinks = [
		{ link: '/', text: 'Shipping Information' },
		{ link: '/', text: 'Return Policy' },
		{ link: '/', text: 'Warranty & Repairs' },
		{ link: '/', text: 'Order Tracking' },
		{ link: '/', text: 'FAQs' },
	];

	const shopLinks = [
		{ link: '/', text: 'New Arrivals' },
		{ link: '/', text: 'Best Sellers' },
		{ link: '/', text: 'Limited Editions' },
		{ link: '/', text: 'Gift Cards' },
		{ link: '/', text: 'Custom Knives' },
	];

	const connectWithUsLinks = [
		{ link: '/', text: 'Contact Us' },
		{ link: '/', text: 'Find a Store' },
		{ link: '/', text: 'Follow Us on Instagram' },
		{ link: '/', text: 'Join Our Newsletter' },
		{ link: '/', text: 'Events & Workshops' },
	];

	const usefulLinks = [{ link: '/', text: 'Payment and Shipping Methods' }];

	const ourGuarantee = [
		{
			link: '/',
			text: 'Not satisfied with your purchase? You can return it within 30 days from the date of receipt, according to our policy.',
		},
	];

	return (
		<footer className={styles.footer}>
			<ChoiceAdvice />

			<div className={`${common._container} ${styles.footer__container}`}>
				{/* Top Section */}
				<section className={`${styles.footer__block} ${styles.footer__top}`}>
					{isMobile ? (
						<NestedLink rootLink='ABOUT US' sublinks={aboutUsLinks.map(link => link.text)} />
					) : (
						<FooterColumn title='ABOUT US'>
							{aboutUsLinks.map((link, index) => (
								<CustomLink key={index} link={link.link}>
									{link.text}
								</CustomLink>
							))}
						</FooterColumn>
					)}

					{isMobile ? (
						<NestedLink rootLink='CUSTOMER SERVICE' sublinks={customerServiceLinks.map(link => link.text)} />
					) : (
						<FooterColumn title='CUSTOMER SERVICE'>
							{customerServiceLinks.map((link, index) => (
								<CustomLink key={index} link={link.link}>
									{link.text}
								</CustomLink>
							))}
						</FooterColumn>
					)}

					{isMobile ? (
						<NestedLink rootLink='SHOP' sublinks={shopLinks.map(link => link.text)} />
					) : (
						<FooterColumn title='SHOP'>
							{shopLinks.map((link, index) => (
								<CustomLink key={index} link={link.link}>
									{link.text}
								</CustomLink>
							))}
						</FooterColumn>
					)}

					{isMobile ? (
						<NestedLink rootLink='CONNECT WITH US' sublinks={connectWithUsLinks.map(link => link.text)} />
					) : (
						<FooterColumn title='CONNECT WITH US'>
							{connectWithUsLinks.map((link, index) => (
								<CustomLink key={index} link={link.link}>
									{link.text}
								</CustomLink>
							))}
						</FooterColumn>
					)}
				</section>

				{/* Bottom Section */}
				<section className={`${styles.footer__block} ${styles.footer__bottom}`}>
					<FooterColumn title='CONTACTS'>
						<CustomLink link='/'>
							<CustomImage src='assets/images/footer/phone.svg' alt='phone' propsStyles={`${styles.footer__bottom_icons}`} />
							+38 (099) 456-49-67
						</CustomLink>

						<CustomLink link='/'>
							<CustomImage src='assets/images/footer/clock.svg' alt='clock' propsStyles={`${styles.footer__bottom_icons}`} />
							Mon-Fri 7:00 - 16:00 (UTC)
						</CustomLink>

						<CustomLink link='/'>
							<CustomImage src='assets/images/footer/pin.svg' alt='location' propsStyles={`${styles.footer__bottom_icons}`} />
							UA Knives, Naukova St, 1, Office “6B”
						</CustomLink>

						<CustomLink link='/'>
							<CustomImage src='assets/images/footer/mail.svg' alt='email' propsStyles={`${styles.footer__bottom_icons}`} />
							info@zlatmax.ua
						</CustomLink>
					</FooterColumn>

					{isMobile ? (
						<NestedLink rootLink='USEFUL LINKS' sublinks={usefulLinks.map(link => link.text)} />
					) : (
						<FooterColumn title='USEFUL LINKS'>
							{usefulLinks.map((link, index) => (
								<CustomLink key={index} link={link.link}>
									{link.text}
								</CustomLink>
							))}
						</FooterColumn>
					)}

					{isMobile ? (
						<NestedLink rootLink='OUR GUARANTEE' sublinks={ourGuarantee.map(link => link.text)} />
					) : (
						<FooterColumn title='OUR GUARANTEE'>
							{ourGuarantee.map((link, index) => (
								<CustomLink key={index} link={link.link}>
									{link.text}
								</CustomLink>
							))}
						</FooterColumn>
					)}

					<FooterColumn title='NEWSLETTER'>
						<CustomLink noRedirect={true} link='/' propsStyles={styles.footer__email_subscribe}>
							Subscribe now!
						</CustomLink>
						<EmailSubscribeForm />
					</FooterColumn>
				</section>

				{/* Rights Section */}
				<section className={styles.footer__rights}>
					<p className={styles.footer__info}>
						All materials presented on the site are for informational purposes only and do not constitute a public offer as defined by Article 641 of the Civil Code of Ukraine. When copying materials, a hyperlink to www.zlatmax.ua is mandatory!
					</p>

					<p>Zlatoust Knives www.zlatmax.ua ©</p>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
