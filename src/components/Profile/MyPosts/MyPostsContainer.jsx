import React from 'react';
import MyPosts from './MyPosts.jsx';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            const action = updatePostActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
