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

        this.state = {
            emailStatus: 'Not sent',
            emailDateSent: '',
            emailFrom: '',
            emailTo: '',
            emailSubject: '',
            emailBody: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    ValidateEmail(mail)
    {
        // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // return mail.match(mailformat);
        // return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        //alert(mail);
        var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        return re.test(mail);
    }

    sendMessage() {
        if (this.state.emailFrom === "") {
            alert("Please enter the sender's email address.");
        } else if (!this.ValidateEmail(this.state.emailFrom)) {
            alert("The sender's email address is not valid.");
        } else if (this.state.emailTo === "") {
            alert("Please enter the recipient's email address.");
        } else if (!this.ValidateEmail(this.state.emailTo)) {
            alert("Recipient's email address is not valid.");
        } else if (this.state.emailSubject === "") {
            alert("Please enter a subject for the message.");
        } else if (this.state.emailBody === "") {
            alert("Please enter a message to send.");
        } else {
            fetch('api/email', {
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
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
        console.log(name, value);
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
                            Send Email
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Grid container direction="column" spacing={16} className="add-building">
                        <Grid item md={12}>
                            <Button variant="contained" style={style} color="primary" onClick={this.sendMessage.bind(this)}>
                                <i class="material-icons mdc-button__icon" aria-hidden="true">send</i>
                                Send message
                            </Button>
                            <Button variant="outline" style={style} color="primary" onClick={this.handleClear}>
                                <i class="material-icons mdc-button__icon" aria-hidden="true">clear</i>
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item md={12}>
                            <label className="display-label" htmlFor="emailStatus">Status</label>
                            <Input
                                inputType="text"
                                className="text-input"
                                name="emailStatus"
                                id="emailStatus"
                                title="Status"
                                value={this.state.emailStatus}
                                readOnly
                            />
                        </Grid>
                        <Grid item md={12}>
                            <label className="display-label" htmlFor="emailDateSent">Date sent</label>
                            <Input
                                inputType="text"
                                className="text-input"
                                name="emailDateSent"
                                id="emailDateSent"
                                title="Date sent"
                                readOnly
                                value={this.state.emailDateSent}
                            />
                        </Grid>
                        <Grid item md={12}>
                            <label className="display-label" htmlFor="emailFrom">Sender</label>
                            <Input
                                inputType="text"
                                className="text-input"
                                name="emailFrom"
                                id="emailFrom"
                                title="From"
                                value={this.state.emailFrom}
                                onChange={this.handleChange}
                                placeholder="Enter the sender's email address"
                            />
                        </Grid>
                        <Grid item md={12}>
                            {/* TODO: need to figure out how to get this to format correctly with a better label */}
                            <label className="display-label" htmlFor="emailTo">Recipient</label>
                            <Input
                                inputType="text"
                                className="text-input"
                                name="emailTo"
                                id="emailTo"
                                title="To"
                                value={this.state.emailTo}
                                onChange={this.handleChange}
                                placeholder="Enter the recipient's email address"
                            />
                        </Grid>
                        <Grid item md={12}>
                            <label className="display-label" htmlFor="emailSubject">Subject</label>
                            <Input
                                inputType="text"
                                className="text-input"
                                name="emailSubject"
                                id="emailSubject"
                                title="Subject"
                                value={this.state.emailSubject}
                                onChange={this.handleChange}
                                placeholder="Enter the subject for the message"
                            />
                        </Grid>
                        <Grid item md={12}>
                            <label className="display-label" htmlFor="emailBody">Body</label>
                            {/* TODO: Figure out if another react or material Ui component would work better here */}
                            <textarea
                                //inputType="text"
                                className="text-area"
                                name="emailBody"
                                id="emailBody"
                                title="Body"
                                rows={8}
                                wrap="soft"
                                value={this.state.emailBody}
                                onChange={this.handleChange}
                                //placeholder="Enter the message"
                            />
                        </Grid>
                    </Grid>
                </Card>
            </div>
        )
    }
}
export default SendMail;
