import React from 'react';
import style from './Header.module.css';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';
import Button from '../common/Button/Button';

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src={logo} alt="logo" />
            <div className={style.loginBock}>
                {props.isAuth ?
                    <div>{props.login} - <Button onButtonClick={props.logout}>Log out</Button></div> :
                    <NavLink to={'/login'}>
                        <Button>Login</Button>
                    </NavLink>}
            </div>

        </header>
    )
}

export default Header
