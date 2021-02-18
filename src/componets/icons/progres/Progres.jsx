import React from 'react'
import styles from './Progres.module.css'
import CircularProgress from '@material-ui/core/CircularProgress'

export default ({ progres }) => {
  return (
    <>
      <CircularProgress
        variant='determinate'
        value={100}
        thickness={8}
        className={styles.progreso}
      />
      <CircularProgress
        variant='determinate'
        value={progres}
        thickness={8}
        className={styles.circulo}
      />
    </>
  )
}
