/** @format */

// React
import React from "react";
// local styles
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";
import { Link, animateScroll as scroll } from "react-scroll/modules";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className={styles.container}>
			<div className={styles.wrapper}>
				<section className={styles.rights}>
					<img src='/assets/images/footer/footer_logo.png' alt='rights' />
					<h3>{t(`footer.rights`)}</h3>
				</section>
				<section className={styles.download}>
					<h3>{t(`footer.downloadApp`)}</h3>
					<img
						src='/assets/images/footer/googlePlayDownload.png'
						alt='Google Play Download'
					/>
					<img
						src='/assets/images/footer/appleStore.png'
						alt='apple store Download'
					/>
				</section>
				<section className={styles.menu}>
					<div className={styles.links}>
						<h3>{t(`footer.menu`)}</h3>
						<Link to='main' smooth={true} duration={300}>
							{t(`navbar.main`)}
						</Link>
						<Link to='services' smooth={true} duration={300}>
							{t(`navbar.services`)}
						</Link>
						<Link to='about' smooth={true} duration={300}>
							{t(`navbar.about`)}
						</Link>
					</div>
				</section>
				<section className={styles.social}>
					<h3>{t(`footer.followUs`)}</h3>
					<div className={styles.socialImages}>
						<img src='/assets/images/footer/footer_twitter.png' alt='Twitter' />
						<img
							src='/assets/images/footer/footer_instagram.png'
							alt='Instagram'
						/>
						<img
							src='/assets/images/footer/footer_facebook.png'
							alt='Facebook'
						/>
					</div>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
