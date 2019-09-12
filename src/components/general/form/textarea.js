import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './form.scss'

class TextArea extends Component {
  state = { 
    message:''
   }

  handleOnChang=(e)=>{
    this.setState({[e.target.name]:e.target.value})
   }

  checkTextArea=()=>{
    if(this.state.message !== ""){
      
    }
  }

  render() { 
    const {message} = this.state
    return(
      <div className="form-group ">  
        <textarea type='text' row="10" col='10' name='message' value={message} onChange ={this.handleOnChang} placeholder='Message' autoComplete='message' required></textarea>
      </div>
    )
}
}
 
export default TextArea;

