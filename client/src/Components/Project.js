import React from 'react';
import ListMail from './ListMail';
import ListSurveys from './ListSurveys';
import ProjectDocumentation from './ProjectDocumentation';

class Project extends React.Component {
    constructor(props) {
        super(props);
        //var { match: { params } } = this.props["params"];
        this.projectId = props.params.params["projectId"];
        this.state = {
            projectName: "",
            clientName: "",
            auth:"",
            description: ""
        }
    }

    componentDidMount() {

	//auth
	fetch("/projects/members/" + this.projectId)
            .then(response => response.json())
	.then(body => {
		for(var j=0;j<body.list.length;j++)
		{
			if (this.props.user["_id"]===body.list[j])
			{this.setState({auth:true})}
		}
		if(this.state.auth!=true){this.setState({auth:false})}
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


	if (this.state.auth===false)
	{
    return (
	<div>
	<h1>You are not authorized to view this page</h1>
	</div>
	);
	}
	else if(this.state.auth===true){
        return (
            <div>
                <p><label className="display-label">Project: </label>{this.state.projectName}</p>
                <p><label className="display-label">Client: </label>{this.state.clientName}</p>
                <p><label className="display-label">Description: </label>{this.state.description}</p>
                <br />
                {/* TODO: Set maximum height on email list */}
                <ListMail projectId={this.projectId} />
                <br />
                <ListSurveys  projectId={this.projectId} />
                <ProjectDocumentation projectId={this.projectId} />
            </div>
        )
	}
	else
	{return(<div></div>)}
    }

}
export default Project;
