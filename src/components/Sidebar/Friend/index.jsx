import React from 'react';

import style from './Friend.module.css';

function Friend({ name }) {
  return (
    <div className={style.friendContainer}>
      <div className={style.friend}></div>
      <p>{name}</p>
    </div>
  )
}

export default Friend;
