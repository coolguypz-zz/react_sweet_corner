import React from 'react';
import { reduxForm } from 'redux-form'
import Input from '../general/form/input';
import TextArea from '../general/form/textarea';
import 'bootstrap/dist/css/bootstrap.css'


export default reduxForm({
  form: 'simple' // a unique identifier for this form
})( props =>{
 
  const { handleSubmit, pristine, submitting } = props
  console.log("form,pristine",props.pristine);
  console.log("form,pristine",props.handleSubmit);


  return(
    <>
    <form onSubmit={handleSubmit} className='float-right mr-5'>
    <h4>Contact Form</h4>
    <Input />
    <TextArea/>
    <div>
    <button className='font-weight-bold send float-right mr-2 mt-2' type="submit" disabled={pristine || submitting} >SEND</button>
    </div>
  </form>
    </>
  )
})
 