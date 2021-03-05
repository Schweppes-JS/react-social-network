import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import style from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({ profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />;
    }

    return (
        <div>
            <div className={style.descriptionBlock}>
                <img
                    src={profile.photos.large}
                    alt="user avatar"
                    className={style.profilePhoto}
                />
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;
