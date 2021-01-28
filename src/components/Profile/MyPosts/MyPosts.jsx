import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {

    let postsElement = props.posts.map(post => <Post massage={post.message} likesCount={post.likesCount} />);

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;
