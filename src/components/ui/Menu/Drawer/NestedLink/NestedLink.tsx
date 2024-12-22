import { FC, useState } from 'react';

import { renormalizeLink } from '../../../../../utils/LinkUtills';
import CustomImage from '../../../common/CustomImage/CustomImage';
import CustomLink from '../../../common/CustomLink/CustomLink';
import styles from './NestedLink.module.scss';

interface Props {
	rootLink: string;
	sublinks: string[];
}

const NestedLink: FC<Props> = ({ rootLink, sublinks }) => {
	const [showSublinks, setShowSublinks] = useState<boolean>(false);
	console.log(showSublinks);

	if (sublinks?.length === 0) {
		return <CustomLink link={rootLink}>{renormalizeLink(rootLink)}</CustomLink>;
	}

	return (
		<div
			className={styles.nested_link}
			onClick={() => setShowSublinks(!showSublinks)}
		>
			<div className={styles.nested_link__link}>
				<h3>{renormalizeLink(rootLink)}</h3>
				<CustomImage
					height={24}
					width={24}
					propsStyles={`${styles.nested_link__collapse} ${
						showSublinks && styles.nested_link__collapse_open
					}`}
					alt='collapse'
					src='assets/images/collapse.svg'
				/>
			</div>

			<ul
				className={`${styles.nested_link__sublinks} ${
					showSublinks ? styles.nested_link__open : styles.nested_link__close
				}`}
			>
				{sublinks.map((link: string) => {
					return (
						<CustomLink
							propsStyles={styles.nested_link__sublink}
							key={link}
							link={link}
						>
							{renormalizeLink(link)}
						</CustomLink>
					);
				})}
			</ul>
		</div>
	);
};

export default NestedLink;
