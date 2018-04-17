/**
 * This js file helps with routing. It helps to naviagte user from one path to another
 */

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Community Members homepages
import App from './App';
import NotFound from './NotFound';


import DoctorProfile from './DoctorProfile/DoctorsAccount/Profile';
import DoctorDashboard from './DoctorProfile/DoctorsAccount/Dashboard';
import DoctorLocked from './portals/LockedPortal'




const Routes = (props) => {
  return (
    <Router {...props}>
      <Switch>
        <Route exact path="/" component={App} />

        <Route path="/doctor/profile" component={DoctorProfile} />
        <Route path="/doctor/dashboard" component={DoctorDashboard} />
        <Route path="/doctor/locked" component={DoctorLocked} />
      
      </Switch>
    </Router>
  )
}

export default Routes;
