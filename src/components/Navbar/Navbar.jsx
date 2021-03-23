import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = ({ friends }) => {
    return (
        <nav className={style.nav}>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to="/profile" activeClassName={style.activeLink} replace >Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/users" activeClassName={style.activeLink} replace >Users</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.activeLink} replace >Massages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news" activeClassName={style.activeLink} replace>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music" activeClassName={style.activeLink} replace >Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings" activeClassName={style.activeLink} replace >Settings</NavLink>
            </div>
            {/* <Sidebar friends={friends} /> */}
        </nav >
    )
}

export default Navbar
