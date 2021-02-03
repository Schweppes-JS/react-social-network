import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import { rerenderEntireTree } from '../../../render';
import state from '../../../redux/state';

const MyPosts = (props) => {

    let postsElement = props.posts.map(post => <Post massage={post.message} likesCount={post.likesCount} />);

    let newPostsElement = React.createRef();

    const addPost = () => {
        let text = newPostsElement.current.value;
        props.addPost(text);
        newPostsElement.current.value = '';
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostsElement}></textarea>
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
