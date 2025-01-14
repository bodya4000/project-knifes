import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { normalizeLink } from '../../../../utils/LinkUtills';
import styles from './CustomLink.module.scss';

interface Props {
	link: string;
	children: ReactNode;
	active?: boolean;
	onClick?: (_: string) => void;
	propsStyles?: string;
	noRedirect?: boolean;
}

const CustomLink: FC<Props> = ({ link, children, active, onClick, propsStyles, noRedirect }) => {
	const to = normalizeLink(link);

	const linkProps = {
		onClick: () => onClick && onClick(link),
		className: `
      ${styles.link} 
      ${active ? styles.active : ''} 
      ${propsStyles}
    `,
		style: {
			pointerEvents: active ? 'none' : ('auto' as React.CSSProperties['pointerEvents']),
		} as React.CSSProperties,
	};

	if (noRedirect && onClick) {
		return <button {...linkProps}>{children}</button>;
	}
	if (noRedirect) {
		return <h3 {...linkProps}>{children}</h3>;
	}

	return (
		<Link {...linkProps} to={`${to}`}>
			{children}
		</Link>
	);
};

export default CustomLink;
