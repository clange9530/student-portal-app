import React, { Component } from 'react';
//Import statement to import API that will GET data for individual profile from MongoDB.
//Import statement to import profile picture from Amazon s3.

class Users extends Component {
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
    
    
    componentDidMount(){
        fetch('/api/users/user1')
        .then(res => res.json())
        .then(User => this.setState({ 
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
        }))
        .catch(err => console.log(err));
    }

    /*
    getUserData = async () => {
        const response = await fetch('api/users/user1');
        const body = await JSON.stringify(response);
        console.log(body);
        return body;
    }   
    */
    render() {
        const userinfo = this.state;
        return(
            <div>
                <div className="row">
                    <h3 class="header">{userinfo.UserID}</h3>
                </div>
                <div className="row">
                    <div className="column">
                        <h4>Technical Skills</h4>
                        <ul id="lists">
                            <li>Skill 1</li>
                            <li>Skill 2</li>
                            <li>Skill 3</li>
                        </ul>
                        <h4>Past Projects</h4>
                        <ul id="lists">
                            <li>Project 1</li>
                            <li>Project2</li>
                            <li>Project3</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Detailed Info</h4>
                        <table>
                            <tbody>
                                <tr>{/*userinfo.First}</tr>
                                <tr>Address 1</tr>
                                <tr>Address 2</tr>
                                <tr>
                                    <td>City</td>
                                    <td>State</td>
                                    <td>Zip</td>
                                </tr>   
                                <tr>Email (BUTTON FOR EMAIL)</tr> 
                                <tr>Phone #</tr>
                                <tr>{userinfo.Team*/}</tr>
                                <tr>Link to user's github</tr>
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