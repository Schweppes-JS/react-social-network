import React from 'react';
import style from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import { updateNewMessageActionCreator, sendMessageActionCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

   let state = props.dialogsPage;

   let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
   let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} />);
   let newMessageBody = state.newMessageBody;

   const onSendMessageClick = () => {
      props.sendMessage();
   }

   const onNewMessageChange = (e) => {
      let body = e.target.value;
      props.updateNewMessageBody(body);
   }

   return (
      <div className={style.dialogs}>
         <div className={style.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={style.messages}>
            <div>
               {messagesElements}
            </div>
            <div>
               <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder="Enter your message"></textarea></div>
               <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
         </div>
      </div >
   )
}

export default Dialogs
