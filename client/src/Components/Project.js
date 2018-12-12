import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import ListMail from './ListMail';
import ListSurveys from './ListSurveys';
import ProjectDocumentation from './ProjectDocumentation';


// Tabs adapted from https://github.com/mui-org/material-ui/blob/master/docs/src/pages/demos/tabs/SimpleTabs.js
function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };

class Project extends React.Component {
    constructor(props) {
        super(props);

        this.projectId = props.params.params["projectId"];
        this.state = {
            projectName: "",
            clientName: "",
            auth: false,
            description: "",
            value: 0
        }
    }

    handleTabChange = (event, value) => {
        this.setState({ value: value });
    };

    componentDidMount() {

	    //auth
	    fetch("/projects/members/" + this.projectId)
            .then(response => response.json())
	        .then(body => {
                var isAuthorized = false;

		        for(var j=0;j<body.list.length;j++) {
			        if (this.props.user["_id"] === body.list[j]) {
                        isAuthorized = true;
                    }
                }
                this.setState({auth: isAuthorized});
	        });

        // Make API call to get project info
        // (which will include project name and client name)
        fetch("/api/project/" + this.projectId)
            .then(response => response.json())
            .then(body => {
                this.setState({
                    projectName: body.name,
                    clientName: body.client_name,
                    description: body.description
                });
            });
    }

    render() {
        if (this.state.auth) {
            const { value } = this.state;

            const style = {
                margin: '28px'
            };
    
            const projectDetails = (
                <div>
                    <p><label className="display-label">Project: </label>{this.state.projectName}</p>
                    <p><label className="display-label">Client: </label>{this.state.clientName}</p>
                    <p><label className="display-label">Description: </label>{this.state.description}</p>
                </div>
            );
    
            return (
                <div style={style}>
                    <AppBar position="static" >
                        <Tabs value={value} onChange={this.handleTabChange}>
                        <Tab label="Project Details" />
                        <Tab label="Project Emails" />
                        <Tab label="Project Surveys" />
                        <Tab label="Project Documentation" />
                    </Tabs>
                    </AppBar>
                    {value === 0 && <TabContainer>{projectDetails}</TabContainer>}
                    {value === 1 && <TabContainer><ListMail projectId={this.projectId} /></TabContainer>}
                    {value === 2 && <TabContainer><ListSurveys  projectId={this.projectId} /></TabContainer>}
                    {value === 3 && <TabContainer><ProjectDocumentation projectId={this.projectId} /></TabContainer>}
                </div>
            )
        } else {
            return (
                <div>
                    <h1>You are not authorized to view this page</h1>
                </div>
            );
        }
    }
}
export default Project;
