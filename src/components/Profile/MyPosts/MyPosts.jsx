import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import { rerenderEntireTree } from '../../../render';
import state from '../../../redux/state';

const MyPosts = (props) => {

    let postsElement = props.posts.map(post => <Post massage={post.message} likesCount={post.likesCount} />);

    let newPostsElement = React.createRef();

    const addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        const text = newPostsElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostsElement} value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;
