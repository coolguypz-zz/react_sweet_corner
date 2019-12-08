import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getJWTsignIn} from '../../action/index'
import LoginList from './loginList.jsx'
import 'bootstrap/dist/css/bootstrap.css'


import './user.scss'

class login extends Component {

  componentDidMount(){
    const token = localStorage.getItem('token');
    if(!token) return false;
    else this.props.getJWTsignIn();
  }

  render() {

    const {user,logged} = this.props;
    const token = localStorage.getItem('token');

    return (
      <li className={`menuList nav-item dropdown userLi  ${token ? "  userLi" : " "}`}>
      <Link to={token? "":'/Sign-In'}
           className={`dropdown-toggle nav-link link`} 
           id="navbarDropdown" 
           role="button" data-toggle="dropdown" 
           aria-haspopup="true" aria-expanded="false">
          <i className="fa fa-user" aria-hidden="true" >
          {user == null ?"": <p className="pFont">{`Hi! ${user.user.name}`}</p> }
          </i>
          </Link>
          <LoginList/>
      </li>
    )
  }
}

function mapStateToProps(state){
  return{
    user:state.user.user,
    logged: state.user.loggedIn
  }
}

export default connect(mapStateToProps,{getJWTsignIn})(login);
