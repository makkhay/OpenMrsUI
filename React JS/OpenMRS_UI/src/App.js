/**
 * This is the front page where user will be greeted
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/App.css';

const DOCTOR_AVATAR = 'https://i.imgur.com/BM3FqMI.jpg'


export default class App extends Component {
  render() {
    return (

      <div className="main-container">
        <div className="title">Welcome to OpenMRS Portal</div>
        <div className="landing-page-avatar-container">
          <Link to="/doctor/locked">
            <img className="landing-page-avatar" src={DOCTOR_AVATAR} />
            <p className="active-link">  Sign in </p>
          </Link>         
        
        </div>
      </div>
    );
  }
}
