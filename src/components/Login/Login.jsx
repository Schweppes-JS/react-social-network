import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/required';
import { connect } from 'react-redux';
import { login } from "../../redux/auth-reducer";
import { Redirect } from 'react-router-dom';

const LoginFrom = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} type="password"/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/>
                <span>remember me</span>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginFrom);


function Login(props) {
    const onSubmit = formData => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.remeberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);
