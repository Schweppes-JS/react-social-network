import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <div>
            <div>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                    className={style.profileImage}
                />
            </div>
            <div className={style.descriptionBlock}>
                <img
                    src={props.profile.photos.large}
                    alt="user photo"
                    className={style.profilePhoto}
                />
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
