import { profileReducer, addPostActionCreator } from './profile-reducer';

it('length of posts should be incremented' ,() => {
  const action = addPostActionCreator("github.com");

  let state = {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 11 },
      { id: 3, message: 'Bla-bla?', likesCount: 12 },
      { id: 4, message: 'React?', likesCount: 12 }
    ]
  }

  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(5);
  expect(newState.posts[4].message).toBe("github.com");
});