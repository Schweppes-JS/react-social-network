import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
   let path = `/dialogs/${props.id}`;
   return (
      <div className={style.dialog + ' ' + style.active}>
         <NavLink to={path}>{props.name}</NavLink>
      </div>
   )
}

const Message = (props) => {
   return <div className={style.message}>{props.message}</div>
}

const Dialogs = () => {
   return (
      <div className={style.dialogs}>
         <div className={style.dialogsItems}>
            <DialogItem name="Dimych" id="1" />
            <DialogItem name="Alex" id="2" />
            <DialogItem name="Eugune" id="3" />
            <DialogItem name="Antony" id="4" />
            <DialogItem name="Kristina" id="5" />
            <DialogItem name="Julia" id="6" />
            <DialogItem name="Mike" id="7" />
         </div>
         <div className={style.messages}>
            <Message message='Hi!'></Message>
            <Message message='How are you?'></Message>
            <Message message='Not bad. And you?'></Message>
            <Message message='Nothing special.'></Message>
            <Message message='Do you want go out?'></Message>
            <Message message='Yes, ofcourse!'></Message>
         </div>
      </div>
   )
}

export default Dialogs
