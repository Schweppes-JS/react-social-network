import React from 'react';

import Dialogs from './Dialogs';

import { updateNewMessageActionCreator, sendMessageActionCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { ProfileContainer } from '../Profile/ProfileContainer';

const mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage
   };
}

const mapDispatchToProps = (dispatch) => {
   return {
      updateNewMessageBody: (body) => {
         dispatch(updateNewMessageActionCreator(body));
      },
      sendMessage: () => {
         dispatch(sendMessageActionCreator());
      }
   };
}

const AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


export default DialogsContainer;
