import React from 'react';
import Button from '@material-ui/core/Button';
import {Input} from '@material-ui/core';

class StudentSurvey extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            isNewSurvey: false,
            questionList: null,
            questions: null
        };
    }

    componentDidMount() {
        // Get project id from params
        var { match: { params } } = this.props;
        
        var surveyId = params.surveyId;

        this.projectId = params.projectId;
        this.studentId = "1234567890";         // TODO: Need this to be passed in

        if (surveyId) {
            console.log("Viewing existing survey");

            // Get survey responses from API
            fetch("/api/studentsurvey/" + this.projectId + "/" + surveyId)
                .then(response => response.json())
                .then(survey => {

                    // Build list of questions with placeholders for responses
                    var questions = survey.questions
                    .map(q => { return {
                        question_number: q.question_number,
                        question_prompt: q.question_prompt,
                        question_response: q.question_response
                    }});

                    this.setState({
                        questions: questions,
                        isNewSurvey: false
                    });
                })

        } else {
            console.log("Submitting new survey");

            // Get survey questions from API
            fetch("/api/studentsurvey/questions/" + this.projectId)
                .then(response => response.json())
                .then(survey => {
                    
                    // Build list of questions with placeholders for responses
                    var questions = survey.questions
                    .map(q => { return {
                        question_number: q.question_number,
                        question_prompt: q.question_prompt,
                        question_response: ""
                    }});

                    this.setState({
                        questions: questions,
                        isNewSurvey: true
                    });
                });
        }
    }

    submitSurvey() {
        fetch('/api/studentsurvey/' + this.projectId, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                project_id: this.projectId,
                student_id: this.studentId,
                questions: this.state.questions
            })
        });
        this.handleGoBack();
    }

    handleGoBack() {
        this.props.history.goBack();
    }

    handleChange = (index) => (event) => {
        const target = event.target;
        const value = target.value;

        var questions = this.state.questions;

        questions[index].question_response = value;

        this.setState({questions: questions});
    }

    render() {
        const style = {
            margin: '8px 8px 4px 2px'
        };

        var questionList = null;

        if (this.state.questions) {
            questionList = this.state.questions
                .map((q, index) => {
                    var questionKey = "question" + q.question_number;
                    var questionText = q.question_number + ". " + q.question_prompt;
                    var input;

                    if (this.state.isNewSurvey) {
                        input = 
                            <Input 
                                className="text-input" 
                                name={q.question_number}
                                id={questionKey}
                                title={questionText}
                                value={q.question_response} 
                                onChange={this.handleChange(index)}    
                            />;
                    } else {
                        input = <div><p>{q.question_response}</p></div>;
                    }

                    return (
                        <div key={questionKey}>
                            <label className="display-label" htmlFor={questionKey}>{questionText}</label>
                            {input}
                        </div>
                    );
                });
        } else {
            questionList = <div />
        }

        var cancelButtonText;
        var cancelButtonIcon;
        var submitSurveyButton;

        if (this.state.isNewSurvey) {
            cancelButtonText = "Cancel";
            cancelButtonIcon = "clear";

            submitSurveyButton = 
                <Button variant="contained" style={style} color="primary" onClick={this.submitSurvey.bind(this)}>
                    <i className="material-icons mdc-button__icon" aria-hidden="true">arrow_forward</i>
                    Submit Survey
                </Button>;

        } else {
            cancelButtonText = "Go back";
            cancelButtonIcon = "arrow_back";
            submitSurveyButton = <div />;
        }

        return (
            <div>
                {submitSurveyButton}
                <Button variant="outlined" style={style} color="primary" onClick={this.handleGoBack.bind(this)}>
                    <i className="material-icons mdc-button__icon" aria-hidden="true">{cancelButtonIcon}</i>
                    {cancelButtonText}
                </Button>
                {questionList}
            </div>
        )
    }
}
export default StudentSurvey;