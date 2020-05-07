import React, { Component, Fragment } from 'react';
import { Field, reduxForm } from 'redux-form'
import * as formComponent from '../constants/formConstants'
import { Redirect } from 'react-router-dom'
import Header from './Header'


class Login extends Component {

    componentDidMount() {
        this.props.clearState("signup")
    }

    submit = (values) => {
        let data = {}
        data.user = { "email": values.email, "password": values.password }
        data.device_detail = { "device_type": "web", "player_id": "1" }
        this.props.loginAction(data)
    }

    render() {
        const { handleSubmit } = this.props
        if (this.props.loginStatus && this.props.loginStatus.loginUser && this.props.loginStatus.loginUser.status === 200 && this.props.loginStatus.loginUser.success === true) {
            return <Redirect to="/dashboard" />
        }
        return (
            <Fragment>
                <Header />

                <div className="centered">

                    <div className="container">
                        <div className="reg-outer">
                            <h3>Login</h3>
                            <form onSubmit={handleSubmit(this.submit)}>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <Field
                                            name="email"
                                            type="text"
                                            className="form-control"
                                            placeholder="email"
                                            existed={this.props.loginStatus && this.props.loginStatus.loginFieldError && this.props.loginStatus.loginFieldError.status === 404 && this.props.loginStatus.loginFieldError}
                                            component={formComponent.renderField}
                                            validate={[formComponent.required, formComponent.email]} />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <Field
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                            existed={this.props.loginStatus && this.props.loginStatus.loginFieldError && this.props.loginStatus.loginFieldError.status === 808 && this.props.loginStatus.loginFieldError}
                                            className="form-control"
                                            component={formComponent.renderField}
                                            validate={[formComponent.required, formComponent.checkPassword]} />
                                    </div>
                                </div>


                                <div className="col-sm-5 mx-auto">
                                    <div className="form-group">
                                        <button className="btn btn-submit btn-block">Login </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
Login = reduxForm({
    form: 'loginForm'
})(Login)
export default Login