import React from 'react';
import ListMail from './ListMail';
import ListSurveys from './ListSurveys';
import ProjectDocumentation from './ProjectDocumentation';

class Project extends React.Component {
    constructor(props) {
        super(props);

        var { match: { params } } = this.props;
        this.projectId = params.projectId;

        this.state = {
            projectName: "",
            clientName: "",
            description: ""
        }
    }

    componentDidMount() {
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

}
export default Project;