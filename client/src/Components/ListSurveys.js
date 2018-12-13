import React from 'react';
import { Link, withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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

        const buttonDivStyle = {
            margin: '0px 0px 24px 0px'
        }

        return (
            <div className="column1">
                <div style={buttonDivStyle}>
                    <Link to={"/studentsurvey/" + this.projectId}>
                        <Button variant="contained" style={style} color="primary" >
                            <i className="material-icons mdc-button__icon button-icon" aria-hidden="true">note_add</i>
                            Submit student survey
                        </Button>
                    </Link>
                    <Link to={"/clientsurvey/" + this.projectId}>
                        <Button variant="contained" style={style} color="primary" >
                            <i className="material-icons mdc-button__icon button-icon" aria-hidden="true">open_in_browser</i>
                            View client survey
                        </Button>
                    </Link>
                </div>
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
            </div>
        )
    }
}
export default withRouter(ListSurveys);