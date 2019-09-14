import React from 'react'
import { Field } from 'redux-form'
import './form.scss'


const Input = props => {
  
  return (
    <>
      <div className='m-2'>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Name"
            className='name'
            pattern = '([A-Za-z ]+) ([A-Za-z ]+)'
            required
          />
        </div>
      </div>
      <div className='m-2'>
        <div>
          <Field
            name="email"
            component="input"
            type="text"
            placeholder="Email"
            className='email'
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
        </div>
      </div>
      <div className='m-2'>
        <div>
          <Field
            name="phone"
            component="input"
            type="number"
            placeholder="Phone"
            className='phone'
            pattern=".{10,}"
            required
          />
        </div>
      </div>
      <div className='m-2'>
        <div>
          <Field
            name="subject"
            component="input"
            type="text"
            placeholder="Subject"
            className='subject'
            required
          />
        </div>
      </div>
 
    </>
  )
}

export default Input;
