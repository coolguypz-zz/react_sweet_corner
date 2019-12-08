
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import InputWithErrors from '../general/form/input';
import TextArea from '../general/form/textarea';
import 'bootstrap/dist/css/bootstrap.css'
import '../general/form/form.scss'


class ErrorHandlingForm extends Component {
    
    
    handleFormSubmit(formValues) {
        console.log('On Submit Error Handling Form Values:', formValues);

        this.resetForm();
    }

    resetForm() {
        this.props.reset();
    }

    render() {
        const { handleSubmit,pristine,submitting} = this.props;
        return (
            <div>
                  <h4>Contact Form</h4>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className='float-right mr-5'>
                    <Field placeholder="Name" name="name"  id='name' component={InputWithErrors} />
                    
                    <Field placeholder="Email" name="email" id='email' component={InputWithErrors} autoComplete="email" />
                    
                    <Field placeholder="Phone" name="phone" id='phone' component={InputWithErrors} type="number" autoComplete="number" />

                    <Field placeholder="Subject" name="subject" id='subject' component={InputWithErrors} type="text" autoComplete="subject" />

                    <TextArea/>
                    <div >
                    <button className=' font-weight-bold send float-right mr-2 mt-2' type="submit" disabled={pristine || submitting} >SEND</button>
                    </div>
                </form>
            </div>
        );
    }
}

function validate(formValues){
    const { name, email, phone, confirmPassword,password } = formValues;
    
    const emailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const nameRegEx =  /^[a-zA-Z ]+[a-zA-Z]+([a-zA-Z ]{4,15})$/;
    const errors = {};

    if(!name){
        errors.name = <p>Please enter your name</p>;
    } else if(name.length < 2){
        errors.name = 'Name must be at least 2 characters long';
    }else if(!nameRegEx.test(name)){
      errors.name = 'Enter firstName and LastName';
    }

    if(!email){
        errors.email = 'Please enter your email';
    } else if(!emailRegEx.test(email)){
        errors.email = <p>Please enter a valid email address. Example: me@example.com</p>;
    }

    if(!phone){
        errors.phone = 'Please enter phone number';
    } else if(phone.length < 10){
        errors.phone = 'phone number must be at least 10 number';
    }

    return errors;
}

export default reduxForm({
    form: 'error-handling-form',
    validate: validate
})(ErrorHandlingForm);