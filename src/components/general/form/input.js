import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './form.scss'

class Input extends Component {
  state = {
    name:'',
    email:'',
    phone:'',
    subject:'',
  }

   handleOnChang=(e)=>{
    this.setState({[e.target.name]:e.target.value})
   }

  render() { 
    const {name,email,phone,subject} = this.state;
    // const {first,last} = name

  return (
    <>
    <div className="form-group ">
      <input type="text" name='name' className='name' value={name} pattern = '([A-Za-z ]+) ([A-Za-z ]+)' placeholder='Name' onChange={this.handleOnChang} autoComplete='name' required/>
    </div>
    <div className="form-group">
      <input type="email" name='email'className='email' value={email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"  placeholder='Email' onChange={this.handleOnChang} autoComplete='email' required/>
    </div>
    <div className="form-group">
      <input type='text' name='phone' className='phone' value={isNaN(phone)? '' : phone} pattern=".{10,}" placeholder='Phone' onChange={this.handleOnChang} autoComplete='phone' required/>
    </div>
    <div className="form-group">
    <input  name='subject' className ='subject' value={subject} placeholder='Subject' onChange={this.handleOnChang} required/>
    </div>
    </>
  )
  }
}
 
export default Input;
  