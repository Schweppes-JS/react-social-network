import React from 'react';
import MyPosts from './MyPosts.jsx';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext.js';

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();
                    const addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };
                    const onPostChange = (text) => {
                        const action = updatePostActionCreator(text);
                        store.dispatch(action);
                    };
                    return (<MyPosts updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText} />
                    );
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;
