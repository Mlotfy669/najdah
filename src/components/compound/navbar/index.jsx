/** @format */

import React from "react";
import { Link, animateScroll as scroll } from "react-scroll/modules";
import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";

const Navbar = () => {
	const { t } = useTranslation();
	return (
		<div className={styles.container}>
			<div
				className={styles.logoContainer}
				onClick={() => scroll.scrollToTop()}>
				<img src='/assets/images/logo.png' alt='logo' />
			</div>
			<div className={styles.links}>
				<Link to='main' smooth={true} duration={300}>
					{t(`navbar.main`)}
				</Link>
				<Link to='services' smooth={true} duration={300}>
					{t(`navbar.services`)}
				</Link>
				<Link to='about' smooth={true} duration={300}>
					{t(`navbar.about`)}
				</Link>
				<Link to='app' smooth={true} duration={300}>
					{t(`navbar.app`)}
				</Link>
				<Link to='blog' smooth={true} duration={300}>
					{t(`navbar.blog`)}
				</Link>
				<Link to='contact' smooth={true} duration={300}>
					{t(`navbar.contact`)}
				</Link>
			</div>
			<button className={styles.book}>{t(`navbar.book`)}</button>
		</div>
	);
};

export default Navbar;
