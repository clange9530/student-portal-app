import React from 'react';
import Button from '@material-ui/core/Button';
import {Input} from '@material-ui/core';

class ClientSurvey extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questionList: null,
        };
    }
    componentDidMount() {
        // Get project id from params
        var { match: { params } } = this.props;

        var projectId = params.projectId;


        // Get survey questions from API
        fetch("/api/clientsurvey/response/" + projectId)
            .then(response => response.json())
            .then(survey => {
                    
                // Build list of controls to display questions and responses
                var questionList = survey.questions
                    .map(q => { 
                        var questionKey = "question" + q.question_number;
                        var questionText = q.question_number + ". " + q.question_prompt;
                            
                        return (
                            <div key={questionKey}>
                                <label className="display-label" htmlFor={questionKey}>{questionText}</label>
                                <Input 
                                    className="text-input" 
                                    name={q.question_number}
                                    id={questionKey}
                                    title={questionText}
                                    value={q.question_response} 
                                    readOnly
                                />
                            </div>
                        );
                    });
        
                this.setState({questionList: questionList});
            });
    }

    handleGoBack() {
        this.props.history.goBack();
    }

    render() {
        const style = {
            margin: '8px 8px 4px 2px'
        };

        return (
            <div>
                {this.state.questionList}
                <Button variant="outlined" style={style} color="primary" onClick={this.handleGoBack.bind(this)}>
                    <i className="material-icons mdc-button__icon" aria-hidden="true">arrow_back</i>
                    Go back
                </Button>
            </div>
        )
    }
}
export default ClientSurvey;