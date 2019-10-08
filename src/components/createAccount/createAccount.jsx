import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import InputTemplate from '../login/customForm.jsx'
import {createCustomerAccount} from '../../action/index'
import {connect} from 'react-redux'
import './createAccount.scss'


 class createAccount extends Component {

  handleCreateAccountForm=(value)=>{
    this.props.createCustomerAccount(value);
    this.props.reset();
  }

  signIn=()=>{
    this.props.history.push('/Sign-In')
  }

  render() {
    const { handleSubmit,pristine,submitting} = this.props;
    return (
      <div className='sclogin row'>
        {/* <h2 className=' center col-md-6 offset-md-3 mt-2'>Sweet Corner</h2> */}
        <div className="createaccount col-md-6 offset-md-3">
          <h2 className='m-3'>Create account</h2>
          <form className='col-sm-12'
            onSubmit={handleSubmit(this.handleCreateAccountForm)} >  
            <Field label ='First name' placeholder="First name" name="firstname"  type='text' component={InputTemplate} autoComplete="firstname" />   
            <Field label ='Last name' placeholder="Last name" name="lastname"  type='text' component={InputTemplate} autoComplete="lastname" />   
            <Field label ="Email(phone for mobile accounts)" placeholder="email" name="email" component={InputTemplate} autoComplete="email" />
            <Field label ='Password' placeholder="At least 6 characters" name="password"  type='text' component={InputTemplate} autoComplete="new-password" />
            <Field label ="Re-enter password" placeholder="" name="confirmPassword" component={InputTemplate} autoComplete="confirmPassword" />
            <div >
            <button className='btn btn-warning mt-2 mb-5 loginbutton' type="submit" disabled={pristine || submitting} >SEND</button>
            </div>  
            <hr/>
           <div className='span'>
            <p className='d-inline'>Already have an account?</p>
            <p className='d-inline signIn-click' onClick={this.signIn}> Sign-In</p>
           </div>
        </form>
      </div>
    </div>
    )
  }
}

createAccount=reduxForm({
  form: 'createAccount',
  validate: validate
})(createAccount);


export default connect(null,{createCustomerAccount})(createAccount)



function validate(formValues){
  const {  firstname,lastname,email, password ,confirmPassword} = formValues;
  
  const emailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const errors = {};

  if(!firstname){
    errors.firstname = 'Please enter your first name';
  }  
  if(!lastname){
    errors.lastname = 'Please enter your last name';
  } 

  if(!email){
      errors.email = 'Please enter your email';
  } else if(!emailRegEx.test(email)){
      errors.email = <p>Please enter a valid email address. Example: me@example.com</p>;
  }

  if(!password){
      errors.phone = 'Please enter password';
  } else if(password.length < 6){
      errors.password = 'password must be at least 6 ';
  }
  if(password !== confirmPassword){
        errors.confirmPassword = 'Passwords do not match';
    }

  return errors;
}