import React from 'react';
import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
            </div>
            <div>ava + description</div>
            <div>My post
                <div>new post</div>
                <div className={style.posts}>
                    <div className={style.item}>Post 1</div>
                    <div className={style.item}>Post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile
