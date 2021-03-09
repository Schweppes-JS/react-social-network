import React from 'react';
import { reduxForm } from 'redux-form';
import { Input, createField } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/required';
import { connect } from 'react-redux';
import { login } from "../../redux/auth-reducer";
import { Redirect } from 'react-router-dom';
import formStyles from '../common/FormsControls/FormsControls.module.css';
import styles from './Login.module.css';
import Button from '../common/Button/Button';

const LoginFrom = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
                {createField("Email", "email", [required], Input)}
                {createField("Password", "password", [required], Input, { type: "password" })}
                {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me" )}
            {error && <div className={formStyles.formSummaryError}>{error}</div>}
            <div>
                <Button>Login</Button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginFrom);


function Login(props) {
    const onSubmit = formData => {
        props.login(formData.email, formData.password, formData.remeberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div className={styles.login}>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);
