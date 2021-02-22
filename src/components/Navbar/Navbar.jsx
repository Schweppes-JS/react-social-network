import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import Sidebar from '../Sidebar';

const Navbar = ({ friends }) => {
    return (
        <nav className={style.nav}>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.activeLink}>Massages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news" activeClassName={style.activeLink}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/users" activeClassName={style.activeLink}>Users</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music" activeClassName={style.activeLink}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings" activeClassName={style.activeLink}>Settings</NavLink>
            </div>
            {/* <Sidebar friends={friends} /> */}
        </nav >
    )
}

export default Navbar
