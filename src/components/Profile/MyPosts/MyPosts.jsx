import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
    return (
        <div>My posts
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
            <div className={style.posts}>
                <Post massage="Hi, how are you?"/>
                <Post massage="It's my first post"/>
            </div>
        </div>
    )
}

export default MyPosts
