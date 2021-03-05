import { profileReducer, addPostActionCreator, deletePost } from './profile-reducer';

let state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: 'Bla-bla?', likesCount: 12 },
    { id: 4, message: 'React?', likesCount: 12 }
  ]
}

it('length of posts should be incremented' ,() => {
  const action = addPostActionCreator("github.com");
  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct' ,() => {
  const action = addPostActionCreator("github.com");
  const newState = profileReducer(state, action);
  expect(newState.posts[4].message).toBe("github.com");
});

it('after deleting length of message should be decrement' ,() => {
  const action = deletePost(1);
  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});

it("after deleting length of message shouldn't be changed if id is incorect" ,() => {
  const action = deletePost(1000);
  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4);
});
