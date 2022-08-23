import React from 'react'
import styles from './index.module.scss'

const Main = () => {
  return (
    <div id='main' className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.phoneContainer}>
          <img src="/assets/images/phone.png" alt="woman image" />
        </div>
        <div className={styles.info}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sint culpa tempore labore dicta et. Voluptas vitae laudantium voluptatibus perferendis temporibus nulla magnam ratione dignissimos nobis quos exercitationem, hic placeat?
        </div>
      </div>
    </div>
  ) 
}

export default Main