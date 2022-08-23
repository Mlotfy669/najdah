import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'


const AboutUs = () => {
  const {t}= useTranslation()
  const locale = useSelector(state => state.locale.value.lang)


  return (
    <div id='about' className={`${styles.container} ${styles[locale]}`}>
      <div className={styles.info}>
        <h2 className={`${styles.head} ${styles[locale]}`}>{t(`about.head`)}</h2>
        <p>{t(`about.paragraph`)}</p>
        <div className={styles.btns}>
          <button>
            {t(`about.more`)}
          </button>
          <button>
            {t(`about.contact`)}
          </button>
        </div>
      </div>
      <div className={styles.circles}>
        <div className={styles.circle}>
          <img src="/assets/images/circleIcon3.svg" alt="svg icon" />
          <span className={styles.title}>{t(`about.circleTitle3`)}</span>
          <span className={styles.paragraph}>{t(`about.circleParagraph3`)}</span>
        </div>
        <div className={styles.circle}>
          <img src="/assets/images/circleIcon2.svg" alt="svg icon" />
          <span className={styles.title}>{t(`about.circleTitle2`)}</span>
          <span className={styles.paragraph}>{t(`about.circleParagraph2`)}</span>
        </div>
        <div className={styles.circle}>
          <img src="/assets/images/circleIcon1.svg" alt="svg icon" />
          <span className={styles.title}>{t(`about.circleTitle1`)}</span>
          <span className={styles.paragraph}>{t(`about.circleParagraph1`)}</span>
        </div>
      </div>
    </div>
  )
}

export default AboutUs