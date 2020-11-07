import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
   return (
      <div className={style.dialog + ' ' + style.active}>
         {props.name}
      </div>
   )
}

const Dialogs = () => {
   return (
      <div className={style.dialogs}>
         <div className={style.dialogsItems}>
            {/* <DialogItem nama="Dimych" id="1"/> */}
            <div className={style.dialog + ' ' + style.active}>
               <NavLink to="/dialogs/1">Alex</NavLink>
            </div>
            <div className={style.dialog}>
               <NavLink to="/dialogs/2">Eugune</NavLink>
            </div>
            <div className={style.dialog}>
               <NavLink to="/dialogs/3">Antony</NavLink>
            </div>
            <div className={style.dialog}>
               <NavLink to="/dialogs/4">Kristina</NavLink>
            </div>
            <div className={style.dialog}>
             <NavLink to="/dialogs/5">Julia</NavLink>
            </div>
            <div className={style.dialog}>
               <NavLink to="/dialogs/6">Mike</NavLink>
            </div>
         </div>
         <div className={style.messages}>
            <div className={style.message}>Hi!</div>
            <div className={style.message}>How are you?</div>
            <div className={style.message}>Not bad. And you?</div>
            <div className={style.message}>Nothing special.</div>
            <div className={style.message}>Do you want go out?</div>
            <div className={style.message}>Yes? ofcourse!</div>
         </div>
      </div>
   )
}

export default Dialogs
