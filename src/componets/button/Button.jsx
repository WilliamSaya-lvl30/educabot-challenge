import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ complete, backgroundColor, size, label, ...props }) => {
  const mode = complete ? styles.complete : '';
  return (
    <button
      type="button"
      className={[styles.secundary, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      <span>
        {label}
      </span> 
    </button>
  );
};

// Button.propTypes = {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   complete: PropTypes.bool,
//   /**
//    * What background color to use
//    */
//   backgroundColor: PropTypes.string,
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   /**
//    * Button contents
//    */
//   label: PropTypes.string.isRequired,
//   /**
//    * Optional click handler
//    */
//   onClick: PropTypes.func,
// };

// Button.defaultProps = {
//   backgroundColor: null,
//   complete: false,
//   size: 'medium',
//   onClick: undefined,
// };
