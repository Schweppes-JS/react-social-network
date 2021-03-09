import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './Pagination.module.css';

const Pagination = ({totalItemsCount, pageSize, onPageChanged, curentPage, portionSize = 10}) => {

  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil( pagesCount / portionSize );
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;
  return (
    <div className={styles.pageNumberContainer}>
      {portionNumber > 1 && <Button onButtonClick={() => setPortionNumber(portionNumber - 1)}>prev</Button>}
      {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
      .map(page => <span key={page}
          onClick={(e) => {
            onPageChanged(page)}}
          className={`${curentPage === page ? styles.selectedPage : ''} ${styles.pageNumber}`}>{page}
        </span>)}
      {portionCount > portionNumber && <Button onButtonClick={() => setPortionNumber(portionNumber + 1)}>next</Button>}
    </div>
  )
}

export default Pagination;
