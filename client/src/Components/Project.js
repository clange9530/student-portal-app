import React from 'react';
import ListMail from './ListMail';
import ListSurveys from './ListSurveys';

class Project extends React.Component {
    constructor(props) {
        super(props);

        var { match: { params } } = this.props;
        this.projectId = params.projectId;

        this.state = {
            projectName: "",
            clientName: ""
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
                    clientName: body.client_name
                });
            });
    }

    render() {
        return (
            <div>
                <p><label className="display-label">Project: </label>{this.state.projectName}</p>
                <p><label className="display-label">Client: </label>{this.state.clientName}</p>
                <br />
                {/* TODO: Set maximum height on email list */}
                <ListMail projectId={this.projectId} />
                <br />
                <ListSurveys  projectId={this.projectId} />

            </div>
        )
    }

}
export default Project;