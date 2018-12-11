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
import TeamSkills from './TeamSkills';
import Login from './login';
import CreateProject from './CreateProject';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	//user['_id']
	user:{_id:"",logged:false,teamid:''}
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
					<Route path='/teams/:teamName' component={Teams}/>
					<Route path='/users/:userID' component={Users}/>
					{/*State needs to update with the UserID property so that the route 'myProfile' will be able to fetch data. 
						 Currently it is updated with the mongoDB property '_id', and the GET method uses the UserID to pull a user's
						 profile. */}
					<Route path='/myProfile' render={(props) => (<Users {...props} user={this.state.user["_id"]}/>)}/>
					<Route path='/createProfile' render={(props) => (<CreateProfile {...props} inherit={false}/>)} />
					<Route path='/editProfile' render={(props) => (<CreateProfile {...props} inherit={true}/>)} />
					<Route path="/sendmail/:projectId/:emailId?" component={SendMail} />
					<Route path="/listmail/:projectId" component={ListMail} />
					<Route path="/studentsurvey/:projectId/:surveyId?" component={StudentSurvey} />
					<Route path="/clientsurvey/:projectId" component={ClientSurvey}/>
					<Route path="/project/:projectId" 
						render={props => 
						<Project
							user={this.state.user}
							params={props.match}
						/>}
					/>    
					<Route path='/teamskills' component={TeamSkills}/>
					<Route
						path="/login"
						render={props => 
						<Login 
							idget={this.getid.bind(this)}
						/>}
					/>
					<Route path="/create_project"
						render={props => 
						<CreateProject
							user={this.state.user}	
						/>
						}
					/>
      	</div>
			</Router>


    );
  }
}
export default App;
  

