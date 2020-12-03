import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
    return (
        <div className={style.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={style.posts}>
                <Post massage="Hi, how are you?" />
                <Post massage="It's my first post" />
            </div>
        </div>
    )
}

export default MyPosts
