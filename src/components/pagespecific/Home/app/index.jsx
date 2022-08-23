import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'


const App = () => {
  const {t}= useTranslation()
  const locale = useSelector(state => state.locale.value.lang)


  return (
    <div id='app' className={`${styles.container} ${styles[locale]}`}>
      
      <div className={styles.image}>
        <img src="/assets/images/app.png" alt="" />
      </div>
      <div className={styles.info}>
        <h2 className={`${styles.head} ${styles[locale]}`}>{t(`app.head`)}</h2>
        <p>{t(`app.download`)}</p>
        <div className={styles.btns}>
          <a href="#">
            <img src="/assets/images/googlePlay.png" alt="" />
          </a>
          <a href="#">
          <img src="/assets/images/applestore.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default App