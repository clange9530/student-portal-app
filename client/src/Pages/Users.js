import React, { Component } from 'react';
//Import statement to import profile picture from Amazon s3.
class Users extends Component {
    constructor(){
        super();
        this.state = {
            UserID: '',
            Skills: [],
            First: '',
            Last: '',
            Address: '',
            City: '',
            State: '',
            Zipcode: '',
            Phone: '',
            Email: '',
            Github: '',
            Team: '',
            Bio: ''
        };
    }
       
    //User parameter of URL will pull from "onClick" when looking at list of 
    //users or team members, so that each name will be a link to this generic page
    //which will fill with relevant info.
    componentDidMount(){
        fetch('/api/users/user1')
        .then(response => response.json())
        .then(UserData => {
            var User = UserData[0];
            this.setState({ 
            Skills: User.Skills,
            UserID: User.UserID,
            First: User.First,
            Last: User.Last,
            Address: User.Address,
            City: User.City,
            State: User.State,
            Zipcode: User.Zipcode,
            Phone: User.Phone,
            Email: User.Email,
            Github: User.Github,
            Team: User.Team,
            Bio: User.Bio
            })
        })
        .catch(err => console.log(err));
    }

    render() {
        return(
            <div>
                <div className="row">
                    <h3 class="header">{this.state.UserID}</h3>
                </div>
                <div className="row">
                    <div className="column">
                        <h4>Technical Skills</h4>
                        <ul id="lists">
                            {this.state.Skills.map((item,i) => <li key={i}>{item}</li>)}
                        </ul>
                        <h4>Past Projects</h4>
                        <ul id="lists">
                            <li>Project 1</li>
                            <li>Project 2</li>
                            <li>Project 3</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Detailed Info</h4>
                        <table>
                            <tbody>
                                <tr>Name: {this.state.First} {this.state.Last}</tr>
                                <tr>Address: {this.state.Address}</tr>
                                <tr>
                                    <td>City: {this.state.City}</td>
                                    <td>State: {this.state.State}</td>
                                    <td>Zip" {this.state.Zipcode} </td>
                                </tr>   
                                <tr>Email: {this.state.Email}</tr> 
                                <tr>Phone: {this.state.Phone} #</tr>
                                <tr>Team: {this.state.Team}</tr>
                                <tr>Github Username: {this.state.Github}</tr>
                            </tbody>   
                        </table>
                        <p>Bio: <br/> {this.state.Bio} </p>                        
                    </div>
                    <div className="column">
                        <h4>Profile Pic</h4>
                    </div>
                </div>
            </div>
        )
    }
}
export default Users;