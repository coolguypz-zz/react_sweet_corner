

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Field } from 'redux-form'
import './form.scss'

export default class TextArea extends Component {

  render() { 
    return(
        <div className='m-2'>
        <div>
          <Field name="notes" component="textarea" placeholder='Message' required/>
        </div>
        </div>
    )
}
}
 

export const showResults = (values)=>{
  console.log(values);
  // await sleep(500); // simulate server latency
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
};