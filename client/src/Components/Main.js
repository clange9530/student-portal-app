import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Users from '../Pages/Users';
import Home from '../Pages/Home';
import Teams from '../Pages/Teams';
import CreateProfile from '../Pages/CreateProfile';
import SendMail from './SendMail';
import ListMail from './ListMail';
import StudentSurvey from './StudentSurvey';
import ClientSurvey from './ClientSurvey';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/teams' component={Teams}/>
            <Route path='/users' component={Users}/>
            <Route path='/createProfile' component={CreateProfile}/>
            <Route path="/sendmail/:projectId/:emailId?" component={SendMail} />
            <Route path="/listmail/:projectId" component={ListMail} />
            <Route path="/studentsurvey/:projectId" component={StudentSurvey} />
            <Route path="/clientsurvey/:projectId" component={ClientSurvey} />
        </Switch>
    </main>
)

export default Main;