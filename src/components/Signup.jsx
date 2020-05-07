import React, { Component, Fragment } from 'react';
import { Field, reduxForm } from 'redux-form'
import * as formComponent from '../constants/formConstants'
import { Redirect } from 'react-router-dom'
import Header from './Header'


class Signup extends Component {

    submit = (values) => {
        let data = {}
        data.user = { "email": values.email, "password": values.password, "first_name": values.first_name, "last_name": values.last_name, "phone": values.phone_number }
        data.device_detail = { "device_type": "web", "player_id": "1" }
        this.props.signupAction(data)
    }

    render() {
        const { handleSubmit } = this.props
        if (this.props.signupStatus && this.props.signupStatus.addUser && this.props.signupStatus.addUser.status === 200 && this.props.signupStatus.addUser.success === true) {
            return <Redirect to="/login" />
        }
        return (
            <Fragment>
                <Header />
                <div className="centered">
                    <div className="container">
                        <div className="reg-outer">
                            <h3>Employee Registration</h3>
                            <form onSubmit={handleSubmit(this.submit)}>
                                <div className="row m-0">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <Field name="first_name" type="text" className="form-control" placeholder="First Name" component={formComponent.renderField} validate={formComponent.required} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <Field name="last_name" type="text" className="form-control" placeholder="Last Name" component={formComponent.renderField} validate={formComponent.required} />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <Field name="email" type="text" existed={this.props.signupStatus && this.props.signupStatus.fieldError} className="form-control" placeholder="email" component={formComponent.renderField} validate={[formComponent.required, formComponent.email]} />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <Field
                                                name="password"
                                                type="password"
                                                placeholder="Password"
                                                onChange={this.handleInputChange}
                                                className="form-control"
                                                component={formComponent.renderField}
                                                validate={[formComponent.required, formComponent.checkPassword]} />
                                        </div>
                                    </div>


                                    <div className="col-sm-12 ">
                                        <div className="form-group">
                                            <Field name="phone_number" type="text" className="form-control" placeholder="Phone Number" component={formComponent.renderField} validate={[formComponent.required, formComponent.mobileValid, formComponent.minLength13]} />
                                        </div>
                                    </div>


                                    <div className="col-sm-5 mx-auto">
                                        <div className="form-group">
                                            <button className="btn btn-submit btn-block">Signup </button>
                                        </div>
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
Signup = reduxForm({
    form: 'signupForm'
})(Signup)
export default Signup