import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Input } from '@material-ui/core';


class SendMail extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;

        this.state = {
            isNewEmail: false,
            emailStatus: 'Not sent',
            emailDateSent: '',
            emailFrom: '',
            emailTo: '',
            emailSubject: '',
            emailBody: '',
            emailFromIsValid: true,
            emailToIsValid: true,
            emailSubjectIsValid: true,
            emailBodyIsValid: true
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        var { match: { params } } = this.props;

        var emailId = params.emailId;

        this.projectId = params.projectId;
        
        if (emailId) {
            console.log("Viewing existing email");

            fetch("/api/email/" + this.projectId + "/" + emailId)
                .then(response => response.json())
                .then(body => {
                    var dateSent;

                    if (body.date_sent)
                        dateSent = new Date(body.date_sent).toDateString();
                    else
                        dateSent = '';

                    this.setState({emailStatus: body.status});
                    this.setState({emailDateSent: dateSent});
                    this.setState({emailFrom: body.sender});
                    this.setState({emailTo: body.recipient});
                    this.setState({emailSubject: body.subject});
                    this.setState({emailBody: body.body});
                });

        } else {
            console.log("Creating new email");
            this.setState({isNewEmail: true});
        }
    }

    validate() {


        return {
            emailFromIsValid: !(this.state.emailFrom === "") && this.ValidateEmail(this.state.emailFrom),
            emailToIsValid: !(this.state.emailTo === "") && this.ValidateEmail(this.state.emailTo),
            subjectIsValid: !(this.state.emailSubject === ""),
            bodyIsValid: !(this.state.emailBody === "")
        }

    }

    ValidateEmail(mail) {
        return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,24})+$/.test(mail))
    }

    sendMessage() {
        var validationResult = this.validate();

        this.setState({emailFromIsValid: validationResult.emailFromIsValid});
        this.setState({emailToIsValid: validationResult.emailToIsValid});
        this.setState({emailSubjectIsValid: validationResult.subjectIsValid});
        this.setState({emailBodyIsValid: validationResult.bodyIsValid});

        if (validationResult.emailFromIsValid && 
            validationResult.emailToIsValid && 
            validationResult.subjectIsValid && 
            validationResult.bodyIsValid) {
            fetch('/api/email/' + this.projectId, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sender:     this.state.emailFrom,
                    recipient:  this.state.emailTo,
                    subject:    this.state.emailSubject,
                    body:       this.state.emailBody
                })
            })
            alert("Message sent.");
            this.handleGoBack();
        }        
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
        console.log(name, value);
    }

    handleGoBack() {
        this.props.history.goBack();
    }

    render() {

        const style = {
            margin: '8px 8px 4px 2px'
          };

        var divStyle = {
            border: '2px solid #000000'
          };

          var newMailButton;
        var cancelButtonText;
        var cancelButtonIcon;
        var dateSentInput;
        var title;

        var statusInput;
        var senderInput;
        var recipientInput;
        var subjectInput;
        var bodyInput;

        console.log("Is New Email?" + this.isNewEmail);

        if (this.state.isNewEmail) {
            console.log("Creating new email button");

            title = "Send Email";

            cancelButtonText = "Cancel";
            cancelButtonIcon = "clear";

            newMailButton = 
                <Button variant="contained" style={style} color="primary" onClick={this.sendMessage.bind(this)}>
                    <i className="material-icons mdc-button__icon button-icon" aria-hidden="true">send</i>
                    Send message
                </Button>;

            statusInput =
                <Input 
                    className="text-input" 
                    name="emailStatus" 
                    id="emailStatus"
                    title="Status"
                    value={this.state.emailStatus}
                    readOnly
                />

            senderInput =   
                <Input 
                    className="text-input" 
                    name="emailFrom" 
                    id="emailFrom"
                    title="From"
                    value={this.state.emailFrom} 
                    onChange={this.handleChange} 
                    readOnly = {!this.state.isNewEmail}
                    placeholder="Enter the sender's email address"
                />

            recipientInput = 
                <Input 
                    className="text-input" 
                    name="emailTo" 
                    id="emailTo"
                    title="To"
                    value={this.state.emailTo} 
                    onChange={this.handleChange} 
                    readOnly = {!this.state.isNewEmail}
                    placeholder="Enter the recipient's email address"
                />

            subjectInput = 
                <Input 
                    className="text-input" 
                    name="emailSubject" 
                    id="emailSubject"
                    title="Subject"
                    value={this.state.emailSubject} 
                    onChange={this.handleChange} 
                    readOnly = {!this.state.isNewEmail}
                    placeholder="Enter the subject for the message"
                />

            bodyInput = 
                <textarea 
                    className="text-area" 
                    name="emailBody" 
                    id="emailBody"
                    title="Body"
                    rows={8}
                    wrap="soft"
                    value={this.state.emailBody} 
                    onChange={this.handleChange} 
                    readOnly = {!this.state.isNewEmail}
                />

            dateSentInput = null;
        } else {
            title = "View Email";
            cancelButtonText = "Go back";
            cancelButtonIcon = "arrow_back";
            newMailButton = <div />;
            dateSentInput = 
                <Grid item md={12}>
                    <label className="display-label" htmlFor="emailDateSent">Date sent</label>
                    <div><p>{this.state.emailDateSent}</p></div>
                </Grid>

            statusInput = <div><p>{this.state.emailStatus}</p></div>
            senderInput = <div><p>{this.state.emailFrom}</p></div>
            recipientInput = <div><p>{this.state.emailTo}</p></div>
            subjectInput = <div><p>{this.state.subjectInput}</p></div>
            bodyInput = <div><p>{this.state.emailBody}</p></div>
        }

        return (
            <div style={{divStyle}} className="column1">
                <Card>
                    <AppBar position="static" >
                        <Toolbar variant="dense">
                            <Typography variant="title" color="inherit">
                            {title}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Grid container direction="column" spacing={16} className="email-grid">
                        <Grid item md={12}>
                            {newMailButton}
                            <Button variant="outlined" style={style} color="primary" onClick={this.handleGoBack.bind(this)}>
                                <i className="material-icons mdc-button__icon button-icon" aria-hidden="true">{cancelButtonIcon}</i>
                                {cancelButtonText}
                            </Button>
                        </Grid>
                        <Grid item md={12}>
                            <label className="display-label" htmlFor="emailStatus">Status</label>
                            {statusInput}
                        </Grid>
                        {dateSentInput}
                        <Grid item md={12}>
                            <label className="display-label" htmlFor="emailFrom">Sender</label>
                            {senderInput}
                            <label className={this.state.emailFromIsValid ? "validation-error-hidden" : "validation-error"}>Please enter a valid sender's email address</label>
                        </Grid>
                        <Grid item md={12}>
                            <label className="display-label" htmlFor="emailTo">Recipient</label>
                            {recipientInput}
                            <label className={this.state.emailToIsValid ? "validation-error-hidden" : "validation-error"}>Please enter a valid recipient's email address</label>
                        </Grid>
                        <Grid item md={12}>
                            <label className="display-label" htmlFor="emailSubject">Subject</label>
                            {subjectInput}
                            <label className={this.state.emailSubjectIsValid ? "validation-error-hidden" : "validation-error"}>Please enter a subject for the message</label>
                        </Grid>
                        <Grid item md={12}>
                            <label className="display-label" htmlFor="emailBody">Body</label>
                            {bodyInput}
                            <label className={this.state.emailBodyIsValid ? "validation-error-hidden" : "validation-error"}>Please enter a message to send</label>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        )
    }
}
export default SendMail;
