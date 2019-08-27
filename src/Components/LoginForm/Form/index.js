import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form'
import { required, minLength2 } from './../../../config/validation';
import  RenderField  from './../../RenderField';
import './form.css'
class Form extends Component {
    render() { 
        return ( 
        <form onSubmit = {this.props.handleSubmit(this.props.onSubmit)} className = 'formWrapper'>
            <div>
                <label name = "login">Login</label>
                <Field name = "login" component={RenderField} type = "text" validate = {[minLength2, required]} ></Field>
            </div>
                <div>
                    <label htmlFor = "password">Password</label>
                    <Field name = "password" component={RenderField} type = "text"  validate = {[minLength2, required]} ></Field>
                </div>
            <div>
                <button type = "submit" >Log in</button>
            </div>
        </form>
    )
    }
}
 Form = reduxForm({
     form: 'addform'
 })(Form)

export default Form;