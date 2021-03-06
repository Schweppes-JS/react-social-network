import React, { useState } from 'react';
import Preloader from '../../common/preloader/Preloader';
import ProfileDataForm from './ProfileDataForm';
import style from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/user.png';
import Button from "../../common/Button/Button";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />;
    }

    const onPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        });
    }

    return (
        <div>
            <div className={style.descriptionBlock}>
                <div className={style.avatarBlock}>
                    <img
                        src={profile.photos.large || userPhoto}
                        alt="user avatar"
                        className={style.profilePhoto}
                    />
                    {isOwner && <label htmlFor="upload-button" className={style.customUploadButton}>Upload photo
                        <input id="upload-button" className={style.uploadButton} type="file" onChange={onPhotoSelected} />
                    </label>}
                </div>

                {editMode ? <ProfileDataForm onSubmit={onSubmit} initialValues={profile} profile={profile} /> : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)} />}
                <p><b>Status</b>: <ProfileStatus status={status} updateStatus={updateStatus} /></p>
            </div>
        </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div className={style.infoBlock}>
            <p><b>Full name</b>: {profile.fullName}</p>
            <p><b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}</p>
            {profile.lookingForAJob && <p><b>My professional skills</b>: {profile.lookingForAJobDescription}</p>}
            <div className={style.contactsBlock}><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return < Contact key={key} contacTitle={key} contactValue={profile.contacts[key]} />
            })}</div>
            <p><b>About me</b>: {profile.aboutMe}</p>
            {isOwner && <Button onButtonClick={goToEditMode}>Edit</Button>}
        </div>
    )
}

const Contact = ({ contacTitle, contactValue }) => {
    return <p className={style.contact}>{contacTitle}: <i>{contactValue}</i></p>
}

export default ProfileInfo;
