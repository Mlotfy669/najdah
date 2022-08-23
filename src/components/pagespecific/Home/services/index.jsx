import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'


const Services = () => {
  const {t}= useTranslation()
  const locale = useSelector(state => state.locale.value.lang)


  return (
    <div id='services' className={styles.container}>
      <div className={styles.info}>
        <h2 className={`${styles.head} ${styles[locale]}`}>{t(`services.head`)}</h2>
        <p>{t(`services.paragraph`)}</p>
        <p>{t(`services.paragraph`)}</p>
        <div className={styles.btns}>
          <button>
            {t(`banner.bookbtn`)}
          </button>
          <button>
            {t(`banner.appbtn`)}
          </button>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src="/assets/images/cardImage1.svg" alt="svg icon" />
          <span className={styles.title}>{t(`services.cardTitle1`)}</span>
          <span className={styles.paragraph}>{t(`services.cardParagraph1`)}</span>
          <button className={styles.more}>{t(`services.learnMore`)}</button>
        </div>
        <div className={styles.card}>
          <img src="/assets/images/cardImage1.svg" alt="svg icon" />
          <span className={styles.title}>{t(`services.cardTitle1`)}</span>
          <span className={styles.paragraph}>{t(`services.cardParagraph1`)}</span>
          <button className={styles.more}>{t(`services.learnMore`)}</button>
        </div>
      </div>
    </div>
  )
}

export default Services