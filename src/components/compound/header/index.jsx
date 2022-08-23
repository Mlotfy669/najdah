// redux , translation
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { changeLocale } from '../../../redux/Features/locale'
import { FaRegUserCircle } from 'react-icons/fa'
// local styles
import styles from './index.module.scss'


const Header = () => {
  const [activeBTN, setActiveBTN] = useState("ar")
  const locale = useSelector(state => state.locale.value.lang)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  // set Active BTN
  useEffect(() => {
    if (locale === 'en') {
      setActiveBTN("en")
    } else {
      setActiveBTN("ar")
    }
  }, [locale])

  return (
    <div className={styles.container}>
      {/* login component */}
      <div className={styles.login}>
        <FaRegUserCircle />
        <span>{t(`header.login`)}</span>
      </div>
      {/* language component */}
      <div className={styles.languageBtns}>
        <button className={activeBTN === "ar" ? styles.active : undefined} onClick={() => dispatch(changeLocale({ lang: "ar", dir: "rtl" }))}>
          ع
        </button>
        <span className={styles.divider}></span>
        <button className={activeBTN === "en" ? styles.active : undefined} onClick={() => dispatch(changeLocale({ lang: "en", dir: "ltr" }))}>
          en
        </button>
      </div>
    </div>
  )
}

export default Header