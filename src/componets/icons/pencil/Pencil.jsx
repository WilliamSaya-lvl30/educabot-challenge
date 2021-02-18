import React from 'react'
import styles from './Pencil.module.css'

export default () => {
  return (
    <div className={styles.pencil}>
      <div className={styles.box}>
        <div className={styles.pencil1} />
        <div className={styles.pencil2}>
          <div />
        </div>
        <div className={styles.pencil3}>
          <div />
        </div>
        <div className={styles.pencil4} />
      </div>
    </div>
  )
}
