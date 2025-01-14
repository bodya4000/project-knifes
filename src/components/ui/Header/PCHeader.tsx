import { FC } from 'react';
import { pcTopHeaderNav } from '../../../assets/data/navigations';
import useActiveLink from '../../../hooks/useActiveLink';
import CustomImage from '../common/CustomImage/CustomImage';
import CustomLink from '../common/CustomLink/CustomLink';
import PCMenu from '../Menu/PCMenu';
import styles from './Header.module.scss';

interface Props {
	propsStyles?: string;
}

const PCHeader: FC<Props> = ({ propsStyles }) => {
	const { active, setActive } = useActiveLink(pcTopHeaderNav || []);
	return (
		<div className={`${propsStyles && propsStyles} ${styles.header_pc__container}`}>
			<PCMenu active={active} setActive={setActive} nav={pcTopHeaderNav} propsStyles={styles.header_pc__menu} activeLinkStyle={styles.header_pc__active_link} />
			<CustomLink link='My account' propsStyles={styles.header_pc__profile}>
				<div className={styles.header_pc__profile_img}>
					<CustomImage src='assets/images/my_account.svg' alt='profile image' />
				</div>

				<div className={styles.header_pc__profile_link}>My account</div>
			</CustomLink>
		</div>
	);
};

export default PCHeader;
