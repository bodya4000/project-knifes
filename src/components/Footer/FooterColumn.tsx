import { FC } from 'react';

import CustomLink from '../common/CustomLink/CustomLink';
import styles from './Footer.module.scss';

interface FooterColumnProps {
	title: string;
	children: React.ReactNode;
	propsStyle?: string;
}

const FooterColumn: FC<FooterColumnProps> = ({
	title,
	propsStyle,
	children,
}) => (
	<div className={`${styles.footer__block_column} ${propsStyle && propsStyle}`}>
		<CustomLink link='/' noRedirect={true}>
			{title}
		</CustomLink>
		{children}
	</div>
);

export default FooterColumn;
