import React from 'react';

import Dialogs from './Dialogs';

import { updateNewMessageActionCreator, sendMessageActionCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {

   return (
      <StoreContext.Consumer>
         {
            (store) => {
               const state = store.getState().dialogsPage;
               const onSendMessageClick = () => {
                  store.dispatch(sendMessageActionCreator());
               };

               const onNewMessageChange = (body) => {
                  store.dispatch(updateNewMessageActionCreator(body));
               };
               return (
                  <Dialogs updateNewMessageBody={onNewMessageChange}
                     sendMessage={onSendMessageClick}
                     dialogsPage={state} />
               );
            }
         }
      </StoreContext.Consumer>)
}

export default DialogsContainer;
