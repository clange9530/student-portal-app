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
        fetch('/api/users/clange')
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
            <div className="row">
                <div className="column">
                    <h4>Profile Pic</h4>
                    <button>Add Profile Picture</button>
                </div>
                <div className="column">
                    <h3>{this.state.UserID}'s Info:</h3>
                    <table>
                        <tbody>
                            <tr><td>Name: {this.state.First} {this.state.Last}</td></tr>
                            <tr><td>Address: {this.state.Address}</td></tr>
                            <tr><td>City: {this.state.City}</td></tr>
                            <tr>
                                <td>State: {this.state.State}</td>
                                <td>Zip: {this.state.Zipcode} </td>
                            </tr>   
                            <tr><td>Email: {this.state.Email}</td></tr> 
                            <tr><td>Phone: {this.state.Phone}</td></tr>
                            <tr><td>Team: {this.state.Team}</td></tr>
                            <tr><td>Github Username: {this.state.Github}</td></tr>
                        </tbody>   
                    </table>
                    <p>Bio: <br/> {this.state.Bio} </p>                        
                </div>
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
            </div>
        )
    }
}
export default Users;