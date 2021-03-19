import React from 'react';
import style from './ProfileInfo.module.css';
import formStyles from '../../common/FormsControls/FormsControls.module.css';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form className={style.infoBlock} onSubmit={handleSubmit}>
      <button>Save</button>
      {error && <div className={formStyles.formSummaryError}>{error}</div>}
      <p><b>Full name</b>: {createField("Full name", "fullName", [], Input)}</p>
      <p><b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}</p>
      <p><b>My professional skills</b>: {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}</p>
      <div className={style.contactsBlock}><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <div key={key} className={style.contact}>
          <b>{key}:{createField(key, "contacts." + key, [], Input)}</b>
        </div>
      })}</div>
      <p><b>About me</b>:{createField("About Me", "aboutMe", [], Textarea)}</p>
    </form>
  )
}

const ReduxProfileDataForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);

export default ReduxProfileDataForm;
