import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
   let path = "/dialogs/" + props.id;
   return (
      <div className={style.dialog + ' ' + style.active}>
         <NavLink to={path}>{props.name}</NavLink>
      </div>
   )
}

const Message = (props) => {
   return (
      <div className={style.message}>{props.message}</div>
   )
}

const Dialogs = () => {

   let dialogs = [
      { id: 1, name: 'Alex' },
      { id: 2, name: 'Eugune' },
      { id: 3, name: 'Antony' },
      { id: 4, name: 'Kristina' },
      { id: 5, name: 'Julia' },
      { id: 6, name: 'Mike' }
   ];
   let messages = [
      { id: 1, message: 'Hi!' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Not bad. And you?' },
      { id: 4, message: 'Nothing special.' },
      { id: 5, message: 'Do you want go out?' },
      { id: 6, message: 'Yes? ofcourse!' }
   ];

   let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
   let messagesElements = messages.map(message => <Message message={message.message} />);

   return (
      <div className={style.dialogs}>
         <div className={style.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={style.messages}>
            {messagesElements}
         </div>
      </div >
   )
}

export default Dialogs
