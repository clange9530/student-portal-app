import React, { Component } from 'react';
//Import statement to import API that will GET data for individual profile from MongoDB.
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
            Team: ''
        };
    }
    /*
    state = {
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
        Team: ''
    }
    */
    
    componentDidMount(){
        fetch('/api/users/user4')
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
            Team: User.Team
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
                            <li>{this.state.Skills[0]}</li>
                            <li>{this.state.Skills[1]}</li>
                            <li>{this.state.Skills[2]}</li>
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
                                <tr>{this.state.First}</tr>
                                <tr>Address" {this.state.Address}</tr>
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
                        <p>User's Bio</p>                        
                    </div>
                    <div className="column">
                        <h4>Profile Pic</h4>
                        <button>Upload</button>

                    </div>
                </div>
            </div>
        )
    }
}
export default Users;