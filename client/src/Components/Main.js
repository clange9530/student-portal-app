import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Users from '../Pages/Users';
import Home from '../Pages/Home';
import Teams from '../Pages/Teams';
import sendMail from '../Components/SendMail';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/teams' component={Teams}/>
            <Route path='/users' component={Users}/>
            <Route path='/sendMail' component={sendMail}/>
        </Switch>
    </main>
)

export default Main;