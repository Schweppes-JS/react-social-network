const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubcriber(this._state);
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      this._addPost();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._updateNewPostText(action.newText);
      this._callSubcriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._updateNewPostText(action.newText);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({ id: 7, message: body });
      this._updateNewPostText(action.newText);
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostActionCreator = text => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageActionCreator = body => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default store;
window.store = store;