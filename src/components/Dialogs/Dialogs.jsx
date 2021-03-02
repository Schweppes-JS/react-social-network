import React from 'react';
import style from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import { Field, reduxForm } from 'redux-form';

import { Redirect } from 'react-router-dom';



const AddMessageForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component="textarea" name="newMessageBody" placeholder="Ented your message" />
         </div>
         <div>
            <button>Send</button>
         </div>
      </form>
   )
}

const ReduxMessageForm = reduxForm({form: 'message'})(AddMessageForm);

const Dialogs = (props) => {

   let state = props.dialogsPage;

   let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
   let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} />);

   const addNewMessage = (value) => {
      props.sendMessage(value.newMessageBody)
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
         </div>
         <ReduxMessageForm onSubmit={addNewMessage}/>
      </div >
   )
}


export default Dialogs
