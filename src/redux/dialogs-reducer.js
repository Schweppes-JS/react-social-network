const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initailState = {
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
};

const dialogsReducer = (state = initailState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({ id: 7, message: body });
      return state;
    default:
      return state;
  }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageActionCreator = body => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;