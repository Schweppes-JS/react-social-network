import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/required';
import { Textarea } from '../../common/FormsControls/FormsControls';


const maxLength300 = maxLengthCreator(300);

const PostFrom = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name="post"
                    component={Textarea}
                    validate={[required, maxLength300]}
                />
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

const MyPosts = React.memo(props => {

    let postsElement = props.posts.map(post => <Post key={post.id} massage={post.message} likesCount={post.likesCount} />);

    const createNewPost = (value) => {
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
})

export default MyPosts;
