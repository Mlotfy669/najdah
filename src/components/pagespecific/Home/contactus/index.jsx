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
						<div className={styles.formDetails}>
							<div className={styles.inputBox}>
								<span className={styles.details}>{t(`contact.name`)}</span>
								<input type='text' placeholder='Enter your name' required />
							</div>

							<div className={styles.inputBox}>
								<span className={styles.details}>{t(`contact.email`)}</span>
								<input type='email' placeholder='Enter your Email' required />
							</div>
							<div className={styles.inputBox}>
								<span className={styles.details}>{t(`contact.phone`)}</span>
								<input type='phone' placeholder='Enter your phone' required />
							</div>
							<div className={styles.inputBox}>
								<span className={styles.details}>{t(`contact.message`)}</span>
								<textarea
									type='phone'
									placeholder='Enter your Message'
									required
								/>
							</div>
						</div>
						<button className={styles.send}>{t(`contact.send`)}</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Services;
