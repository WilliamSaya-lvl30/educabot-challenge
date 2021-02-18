import React from 'react'
import PropTypes from 'prop-types'
import styles from './button.module.css'

export const Button = ({ completado,label}) => {
  const mode = completado ? styles.complete : ''
  return (
    <button
      type='button'
      className={[styles.secundary, mode].join(' ')}
    >
      <span>
        {label}
      </span>
    </button>
  )
}

Button.propTypes = {
  completado: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  completado: false,
  label:'Continuar',
  onClick: undefined,
};
