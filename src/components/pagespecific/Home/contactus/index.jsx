/** @format */

import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";

const Services = () => {
	const { t } = useTranslation();

	return (
		<div id='contact' className={styles.container}>
			<div className={styles.info}>
				<h2>{t(`contact.contactus`)}</h2>
				<p>{t(`contact.contactWithForm`)}</p>
				<div className={styles.contactMethod}>
					<img src='/assets/images/contact/phone.png' alt='phone' />
					<div className={styles.phone}>01012201148</div>
				</div>
				<div className={styles.contactMethod}>
					<img src='/assets/images/contact/mail.png' alt='phone' />
					<div className={styles.email}>email@email.com</div>
				</div>
			</div>
			<div className={styles.cards}>
				<div className={styles.card}>
					<form className={styles.form}>
						<div className={styles.inputBox}>
							<span className={styles.details}>Name</span>
							<input type='text' placeholder='Enter your name' required />
						</div>
						{/* <button className={styles.more}>{t(`services.learnMore`)}</button> */}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Services;
