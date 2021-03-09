import React from 'react';
import styles from './Button.module.css';

function Button({onButtonClick, isDisabled, children}) {
  return (
    <>
      <button onClick={onButtonClick} className={styles.button} disabled={isDisabled}>{children}</button>
    </>
  )
}

export default Button;
