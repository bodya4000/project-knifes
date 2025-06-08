import { FC } from 'react'

import { mobTopHeaderNav, pcTopHeaderNav } from '@/assets/data'
import { CustomImage, CustomLink } from '@/components'
import { useActiveLink, useIsMobile } from '@/hooks'

import common from '../../../../styles/common.module.scss'
import MobMenu from '../../Menu/MobMenu'
import PCMenu from '../../Menu/PCMenu'
import styles from '../Header.module.scss'

interface Props {}

const HeaderTop: FC<Props> = ({}) => {
	const { active, setActive } = useActiveLink(pcTopHeaderNav)
	const isMobile = useIsMobile()
	return (
		<>
			<div className={styles.header__top}>
				<div className={`${common._container}`}>
					{isMobile && (
						<MobMenu
							propsStyles={styles.header_mob}
							nav={mobTopHeaderNav}
						/>
					)}
					{!isMobile && (
						<div
							className={`${styles.header_pc} ${styles.header_pc__container}`}
						>
							<PCMenu
								active={active}
								setActive={setActive}
								nav={pcTopHeaderNav}
								propsStyles={styles.header_pc__menu}
								activeLinkStyle={styles.header_pc__active_link}
							/>
							<CustomLink
								link="My account"
								propsStyles={styles.header_pc__profile}
							>
								<div className={styles.header_pc__profile_img}>
									<CustomImage
										src="assets/images/my_account.svg"
										alt="profile image"
									/>
								</div>

								<div className={styles.header_pc__profile_link}>My account</div>
							</CustomLink>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default HeaderTop
