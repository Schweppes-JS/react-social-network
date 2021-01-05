import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
            <i id={style.avatar} className="fas fa-user-astronaut"></i>
            {props.massage}
            <div>
                <span>like{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post
