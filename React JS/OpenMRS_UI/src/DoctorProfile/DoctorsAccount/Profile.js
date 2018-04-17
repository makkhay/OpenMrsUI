/**
 * This js file displays the user "about me" info
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dock from './Dock'
import '../../styles/MainDoctor.css'

export default class Profile extends Component {
    render() {
        return (
            <div className="main-container-b">
                <div className="profile-container-b">
                    <div className="row-container-b-left">
                        <Dock active="profile" />
                    </div>
                    <div className="row-container-b-right">
                        <div className="info-profile-container-b">
                            <p className="IntroHello-b">About me</p>
                            <p className="AboutText-b" >I like to care for my patient and I like to do surgery. </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
