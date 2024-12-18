import { FC, useState } from 'react';

import { Link } from 'react-router-dom';
import useCartSelector from '../../../hooks/useSelectors/useCartSelector';
import common from '../../../styles/common.module.scss';
import CustomImage from '../common/CustomImage/CustomImage';
import CustomInput from '../common/CustomInput/CustomInput';
import CustomLink from '../common/CustomLink/CustomLink';
import Cart from './Cart/Cart';
import styles from './HeaderBottom.module.scss';

interface Props {}

const HeaderBottom: FC<Props> = ({}) => {
	const [showCart, setShowCart] = useState(false);
	const { totalCount } = useCartSelector();
	return (
		<div className={styles.header__bottom}>
			<div className={`${styles.header__bottom_body} ${common._container}`}>
				<div className={styles.header__bottom_logo}>ZLATMAX</div>

				<div className={styles.header__bottom_search}>
					<CustomImage alt='glass' src='src/assets/images/glass.svg' />

					<CustomInput placeholder='Search' />
				</div>

				<div className={styles.header__bottom_details}>
					<div className={styles.details__location}>
						<CustomImage alt='pin' src='src/assets/images/location.svg' />

						<div className={styles.details__location_city}>Lviv</div>
					</div>
					<CustomLink link='book' propsStyles={styles.details__phone}>
						<div className={styles.details__phone_info}>
							<div className={styles.details__phone_number}>
								+38 (099) 762 2482
							</div>

							<div className={styles.details__phone_book}>Book now!</div>
						</div>
						<CustomImage
							propsStyles={styles.details__phone_img}
							src='src/assets/images/collapse_yellow.svg'
							alt='link'
						/>
					</CustomLink>
					<CustomImage
						propsStyles={styles.details__favorites}
						src='src/assets/images/black_heart.svg'
						alt='favorites'
					/>
					<div className={styles.details__book}>
						<div className={styles.details__cart}>
							<CustomImage
								onClick={() => setShowCart(!showCart)}
								src='src/assets/images/cart_black.svg'
								alt='cart'
							/>
							<div className={styles.details__cart_counter}>{totalCount}</div>

							{showCart && <Cart />}
						</div>

						<div className={styles.details__book_info}>
							<div className={styles.details__book_total}>0 $</div>
							<Link to={'purchase'} className={styles.details__book_link}>
								Purchase
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderBottom;
