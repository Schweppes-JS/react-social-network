import React from 'react';
import loader from '../../../assets/loader.svg';
import styles from './loader.module.css';

function Preloader(props) {
  return (
    <div className={styles.loaderContainer}>
      <img src={loader} alt="loading"/>
    </div>
  )
}

export default Preloader;
