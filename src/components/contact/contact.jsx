import React,{Component} from 'react'
import './contact.scss'
import downDots from '../../assets/images/down-dots.png'
import updots from '../../assets/images/up-dots.png'
import ContactForm from './contact_form'
import Schedule from '../general/schedule/schedule.jsx'
import {showResults} from '../general/form/textarea'

class Contact extends Component {

  // state = { 
  //   name:'',
  //   email:'',
  //   phone:'',
  //   subject:'',
  //   textarea:''
  //  }

  render() { 
   
    return(
      <>
      <div>
        {/* <h1 className="center ">This is Contact</h1> */}
       </div>
          <div className="row mb-3 mt-3">
            <div className="col-md-6">
              <div className='pad'>
              <h4>Contact us today</h4>
              <p>Talk cupcakes to us! At Sweet Corner's we love hearing from our
                 customers. Send your questions, comments and flavor
                 suggestions to:</p>
                 <a className='email' href="mailto:office@sweetcorner.com">office@sweetcorner.com</a>
                 <br />
                 <br />
                 <p>Our expert bakers are waiting to create an unique cupcake
                     bursting with freshness and flavor just for you. Our management
                     team are also waiting for their next event to organize.</p>
              </div>
              <div className='upDotsParent m-4'>
                <img src={updots} className='updots' alt=""/>
              </div>
            </div>
            <div className="col-md-6">
              <div className='pad'>

              <ContactForm onSubmit={showResults}/>
            
              </div>
            </div>
            <div className="col-md-6 schedule">
              <h6 className='ml-5'>For phone orders,our work schedule is:</h6>
                <Schedule/>
            </div>
            <div className="col-md-6 downDotsParent">
              {<img src={downDots} className ='downDots' alt=""/>}
            </div>
          </div>
         
       </>
    )
  }
}
 
export default Contact;


export const home = props=>{
  return(
    <div></div>
  )
}