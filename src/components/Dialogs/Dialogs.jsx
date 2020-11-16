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
   return (
      <div className={style.dialogs}>
         <div className={style.dialogsItems}>
            <DialogItem name="Alex" id="1"/>
            <DialogItem name="Eugune" id="2"/>
            <DialogItem name="Antony" id="3"/>
            <DialogItem name="Kristina" id="4"/>
            <DialogItem name="Julia" id="5"/>
            <DialogItem name="Mike" id="6"/>
         </div>
         <div className={style.messages}>
            <Message message="Hi!"/>
            <Message message="How are you?"/>
            <Message message="Not bad. And you?"/>
            <Message message="Nothing special."/>
            <Message message="Do you want go out?"/>
            <Message message="Yes? ofcourse!"/>
         </div>
      </div>
   )
}

export default Dialogs
