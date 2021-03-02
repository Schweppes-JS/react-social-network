import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import { Field, reduxForm } from 'redux-form';



const PostFrom = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="post" component="textarea" />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const ReduxPostForm = reduxForm({
    form: 'post'
})(PostFrom);

const MyPosts = (props) => {
    let postsElement = props.posts.map(post => <Post massage={post.message} likesCount={post.likesCount} />);

    const createNewPost = (value) => {
        console.log(value)
        props.addPost(value.post);
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
                <ReduxPostForm onSubmit={createNewPost}/>
                <button>Remove</button>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;
