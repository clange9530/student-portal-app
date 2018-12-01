import React from 'react';
import { Link, withRouter } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class ListSurveys extends React.Component {
    constructor(props) {
        super(props);

        const { projectId } = this.props;
        this.projectId = projectId;

        this.navigate = this.navigate.bind(this);

        this.state = {
            surveyList: null
        };
    }

    navigate(path) {
        console.log("Navigating to ", path);
        this.props.history.push(path);
    }

    componentDidMount() {
        fetch("/api/studentsurvey/" + this.projectId) 
            .then(response => response.json())
            .then(surveys => {
                var surveyList = surveys.map(s => {
                    var dateSubmitted;

                    if (s.date_submitted) {
                        dateSubmitted = new Date(s.date_submitted).toDateString();
                    } else {
                        dateSubmitted = "";
                    }

                    return (
                        <tr key={s._id} onClick={() => this.navigate("/studentsurvey/" + this.projectId + "/" + s._id)}>
                            <td className="survey-date-submitted-column">
                                {dateSubmitted} 
                            </td>
                            <td>
                                {s.student_name}
                            </td>
                        </tr>
                    );
                });

                this.setState({surveyList: surveyList});
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
                            Project Surveys
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Grid container direction="column" spacing={16} className="email-grid">
                        <Grid item md={12}>
                            <Link to={"/studentsurvey/" + this.projectId}>
                                <Button variant="contained" style={style} color="primary" >
                                    <i className="material-icons mdc-button__icon" aria-hidden="true">note_add</i>
                                    Submit student survey
                                </Button>
                            </Link>
                            <Link to={"/clientsurvey/" + this.projectId}>
                                <Button variant="contained" style={style} color="primary" >
                                    <i className="material-icons mdc-button__icon" aria-hidden="true">open_in_browser</i>
                                    View client survey
                                </Button>
                            </Link>
                        </Grid>                    
                    </Grid>
                    <Grid container direction="column" spacing={16}>
                        <div className="tableWrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="survey-date-submitted-column">Date submitted</th>
                                        <th className="survey-student-column">Student</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.surveyList}
                                </tbody>
                            </table>
                        </div>
                    </Grid>
                </Card>
            </div>
        )
    }
}
export default withRouter(ListSurveys);