import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

/**
 * This js file deals with password validation and when user input the right password, 
 * he/she will be sent to the profile page
 * 
 */




import '../styles/LockedPortal.css'

import CloseArrow from '../assets/close.png';
import LockIcon from '../assets/lock.png'

export default class LockedPortal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phrase: '',
            redirect: false,
            error: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();

        this.setState({ phrase: event.target.value, error: null })
    }

    handleSubmit(event) {
        const { phrase } = this.state

        if (phrase === 'password' || phrase === 'Password') {
            this.setState({ redirect: true })
        } else {
            this.setState({ error: 'Access Denied' })
        }

        event.preventDefault();
    }

    errorClass() {
        const { error } = this.state

        return error != null ? 'error' : ''
    }

    render() {
        const { phrase, redirect, error } = this.state

        if (redirect) {
            return <Redirect to='/doctor/dashboard' />
        }

        return (
            <div className="portal-container">
                <Link to="/" className="back-arrow-container">
                    <img className="close-icon" src={CloseArrow} />
                </Link>
                <div className="lock-container">
                    <img className="lock-icon" src={LockIcon} />
                    <div className="lock-input-container">
                        <form onSubmit={this.handleSubmit}>
                            <input type="password"
                                className={`phrase-input ${this.errorClass()}`}
                                name="phrase" value={phrase}
                                placeholder="Enter secret phrase"
                                onChange={this.handleChange.bind(this)}
                            />
                        </form>
                        {error != null && <div className="lock-error-message">ACCESS DENIED</div>}
                    </div>
                </div>
            </div>
        );
    }
}