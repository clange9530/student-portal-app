import React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class ListMail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            emailList: null
        };
    }

    componentDidMount() {

        var { match: { params } } = this.props;
        
        this.projectId = params.projectId;

        fetch("/api/email/" + this.projectId) 
            .then(response => response.json())
            .then(emails => {
                console.log(emails);

                var emailList = emails.map(em => 
                {
                    var iconName = "";
                    if (em.status === "Sent")
                        iconName = "check";
                    else if (em.status === "Error")
                        iconName = "error_outline";
                    else if (em.status === "") 
                        iconName = "timer";
            
                    var dateSent = new Date(em.date_sent);

                    return (
                        <tr key={em._id}>
                            <td>
                                <Link className="email-list-item" to={"/sendmail/" + this.projectId + "/" + em._id}>
                                    <i className="material-icons mdc-button__icon" aria-hidden="true">
                                        { iconName }
                                    </i>
                                </Link>
                            </td>
                            <td className="email-date-sent-column">
                                <Link className="email-list-item" to={"/sendmail/" + this.projectId + "/" + em._id}>
                                    {dateSent.toDateString()} 
                                </Link>
                            </td>
                            <td>
                                <Link className="email-list-item" to={"/sendmail/" + this.projectId + "/" + em._id}>
                                    {em.subject}
                                </Link>
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

        var divStyle = {
            border: '2px solid #000000'
        };

        return (


            <div style={{divStyle}} className="column1">
                <Card>
                    <AppBar position="static" >
                        <Toolbar variant="dense">
                            <Typography variant="title" color="inherit">
                            { /* TODO: Do we want to try to add the name of the project we are looking at? */ }
                            Project Emails
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Grid container direction="column" spacing={16} className="email-grid">
                        <Grid item md={12}>
                            <Link to={"/sendmail/" + this.projectId}>
                                <Button variant="contained" style={style} color="primary" >
                                    <i className="material-icons mdc-button__icon" aria-hidden="true">mail_outline</i>
                                    New message
                                    </Button>
                            </Link>
                        </Grid>                    
                    </Grid>

                    { /* TODO: Need to improve styling of table/grid:
                            1. Column widths
                            2. Overall table width
                            3. unexpected space between columns
                            4. padding and margins for table cells */ }
                    <Grid container direction="column" spacing={16}>
                        <div className="tableWrapper">
                            <table>
                                <thead>
                                    <tr>
                                    <th></th>
                                        <th className="email-date-sent-column">Date sent</th>
                                        <th className="email-subject-column">Subject</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.emailList}
                                </tbody>
                            </table>
                        </div>
                    </Grid>
                </Card>
            </div>
        )
    }
}
export default ListMail;