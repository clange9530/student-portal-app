import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class ListMail extends React.Component {

    constructor(props) {
        super(props);

        // This construct will let us get the project ID from the URL if we are calling this component
        // as a page, or from props if it is a component embedded in another page.
        if (this.props.match) {
            var { match: { params } } = this.props;
            this.projectId = params.projectId;
        } else {
            const { projectId } = this.props;
            this.projectId = projectId;
        }

        console.log("Project id: ",this.projectId);

        this.navigate = this.navigate.bind(this);

        this.state = {
            emailList: null
        };
    }

    navigate(path) {
        console.log("Navigating to ", path);
        this.props.history.push(path);
    }

    componentDidMount() {

        console.log("ListMail componentDidMount")

        fetch("/api/email/" + this.projectId) 
            .then(response => response.json())
            .then(emails => {
                var emailList = emails.map(em => 
                {
                    var iconName = "";
                    var statusTooltip = "";
                    if (em.status === "Sent") {
                        iconName = "";
                    }
                    else if (em.status === "Error") {
                        iconName = "error_outline";
                        statusTooltip = "Error sending email";
                    }
                    else if (em.status === "")  {
                        iconName = "timer";
                    }
            
                    var dateSent;

                    if (em.date_sent) 
                        dateSent = (new Date(em.date_sent)).toDateString();
                    else
                        dateSent = "";

                    return (
                        <tr key={em._id} onClick={() => this.navigate("/sendmail/" + this.projectId + "/" + em._id)}>
                            <td title={statusTooltip}>
                                <i className="material-icons mdc-button__icon" aria-hidden="true">
                                    { iconName }
                                </i>
                            </td>
                            <td className="email-date-sent-column">
                                {dateSent} 
                            </td>
                            <td>
                                {em.subject}
                            </td>
                            <td>
                                {em.sender}
                            </td>
                            <td>
                                {em.recipient}
                            </td>
                        </tr>
                    );
                });

                this.setState({emailList: emailList});
            });
    }

    render() {

        const style = {
            margin: '8px 8px 4px 2px'
        };

        const buttonDivStyle = {
            margin: '0px 0px 24px 0px'
        }

        return (
            <div className="email-list">
                <div style={buttonDivStyle}>
                    <Link to={"/sendmail/" + this.projectId}>
                        <Button variant="contained" style={style} color="primary" >
                            <i className="material-icons mdc-button__icon button-icon" aria-hidden="true">mail_outline</i>
                            New message
                            </Button>
                    </Link>
                </div>

                <Grid container direction="column" spacing={16}>
                    <div className="tableWrapper email-table">
                        <table>
                            <thead>
                                <tr>
                                <th></th>
                                    <th className="email-date-sent-column">Date sent</th>
                                    <th className="email-subject-column">Subject</th>
                                    <th className="email-sender-column">Sender</th>
                                    <th className="email-recipient-column">Recipient</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.emailList}
                            </tbody>
                        </table>
                    </div>
                </Grid>
            </div>
        )    
    }
}
export default withRouter(ListMail);