import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({totalUsersCount, pageSize, onPageChanged, curentPage}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={styles.pageNumberContainer}>
      {pages.map(page => <span key={page}
        onClick={(e) => {
          onPageChanged(page)}}
        className={`${curentPage === page ? styles.selectedPage : ''} ${styles.pageNumber}`}>_{page}
      </span>)}
    </div>
  )
}

export default Pagination;
