import React from "react";
import Header from './Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Users from '../Pages/Users';
import Home from '../Pages/Home';
import Teams from '../Pages/Teams';
import CreateProfile from '../Pages/CreateProfile';
import SendMail from './SendMail';
import ListMail from './ListMail';
import StudentSurvey from './StudentSurvey';
import ClientSurvey from './ClientSurvey';
import Project from './Project';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	  //user['_id']
	user:{_id:'5be1bdea467109bf4fb7e242'}
    };
  }

  getid(cred){
    this.setState({user:cred});
  }

  render() {
    
    return (
	    <Router>
	      <div>
	        <Header/>
						<Route exact path='/' component={Home}/>
						<Route path='/teams' component={Teams}/>
						<Route path='/users' component={Users}/>
						<Route path='/createProfile' component={CreateProfile}/>
						<Route path="/sendmail/:projectId/:emailId?" component={SendMail} />
						<Route path="/listmail/:projectId" component={ListMail} />
						<Route path="/studentsurvey/:projectId/:surveyId?" component={StudentSurvey} />
						<Route path="/clientsurvey/:projectId" component={ClientSurvey} />
						<Route path="/project/:projectId" component={Project} />      
      	</div>
			</Router>
    );
  }
}
export default App;
  

