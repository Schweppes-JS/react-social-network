import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import style from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <div>
            <div className={style.descriptionBlock}>
                <img
                    src={props.profile.photos.large}
                    alt="user photo"
                    className={style.profilePhoto}
                />
                <ProfileStatus status={"123"}/>
            </div>
        </div>
    )
}

export default ProfileInfo;
