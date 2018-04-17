/**
 * This js file holds naviagtion menu for user to navigate from one screen to another.
 *
 * 
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/MainDoctor.css'
const DOCTOR_AVATAR = 'https://i.imgur.com/BM3FqMI.jpg'
export default class Dock extends Component {
    render() {
        const { active } = this.props
        return (
      
            <div className="container-dock-b" >
                <div className="links-container-b">
                    <div className="avatar-container-b">
                        <img className="avatar-dock" src={DOCTOR_AVATAR} />
                    </div>
                    <div className="title-dock">John Doe</div>
                    <div className="links-dock">
                        <Link to="/doctor/dashboard" className="link">
                            <h3 className={active === 'dashboard' ? 'active-link' : ''}>Dashboard</h3>
                        </Link>
            
                        <Link to="/doctor/profile" className="link">
                            <h3 className={active === 'profile' ? 'active-link' : ''}>Profile</h3>
                        </Link>
                        <br />
                        <br />
                        <br />
                        <br />
                        <Link to="/" className="link">
                            <h3>Logout</h3>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
