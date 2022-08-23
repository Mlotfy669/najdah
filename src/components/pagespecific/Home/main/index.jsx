import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'

const Main = () => {

  const {t}= useTranslation()

  return (
    <div id='main' className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h1>{t(`banner.head`)}</h1>
          <h2>{t(`banner.subhead`)}</h2>
          <div className={styles.btns}>
            <button>
              {t(`banner.bookbtn`)}
            </button>
            <button>
              {t(`banner.appbtn`)}
            </button>
          </div>
        </div>
        <div className={styles.phoneContainer}>
          <img src="/assets/images/phone.png" alt="woman" />
        </div>
      </div>
    </div>
  )
}

export default Main