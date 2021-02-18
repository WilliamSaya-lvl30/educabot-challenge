import React from 'react'
import styles from './Calendar.module.css'
import CheckIcon from '@material-ui/icons/Check'

export default ({ progres }) => {
  return (
    <div className={styles.calendar}>
      <div className={styles.calendar1} />
      <div className={styles.calendar2} />
      <div className={styles.calendar3} />
      <div className={styles.calendar4} />
      {progres === 100 && <CheckIcon className={styles.calendar5} />}
    </div>
  )
}
