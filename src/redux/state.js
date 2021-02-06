let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 1, message: 'Bla-bla?', likesCount: 12 },
        { id: 1, message: 'React?', likesCount: 12 }
      ],
      newPostText: 'it camasutra'
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Eugune' },
        { id: 3, name: 'Antony' },
        { id: 4, name: 'Kristina' },
        { id: 5, name: 'Julia' },
        { id: 6, name: 'Mike' }
      ],
      messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Not bad. And you?' },
        { id: 4, message: 'Nothing special.' },
        { id: 5, message: 'Do you want go out?' },
        { id: 6, message: 'Yes? ofcourse!' }
      ]
    },
    sidebar: {
      friends: [
        "Alex",
        "Kate",
        "Ilon",
        "John",
        "Stive"
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubcriber() {
    console.log('state changed');
  },
  addPost() {
    const newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubcriber(this._state);
  },
  updateNewPostText(newText) {
    this.state.profilePage.newPostText = newText;
    this._callSubcriber(this._state);
  },
  subscribe(observer) {
    this._callSubcriber = observer;
  }
}

export default store;
window.store = store;