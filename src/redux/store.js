import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
  _callSubcriber() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubcriber = observer;
  },

  _addPost() {
    const newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubcriber(this._state);
  },
  C(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubcriber(this._state);
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);


    this._callSubcriber(this._state);
  }
}

export default store;
window.store = store;