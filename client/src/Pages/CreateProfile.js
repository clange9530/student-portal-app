import React, { Component } from 'react';

class CreateProfile extends Component{
    state = {
        UserID: '',
        Password: '',
        First: '',
        Last: '',
        Address: '',
        City:'',
        State:'',
        Zipcode:'',
        Phone:'',
        Email:'',
        Github:'',
        Bio:'',
        Team: '',
        Skills: []
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    

    handleSubmit = (e) => {
        e.preventDefault();
        var User = this.state;
        fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify(User),
            headers: {"content-type": "application/json"}
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
        this.setState({
            UserID: '',
            Password: '',
            First: '',
            Last: '',
            Address: '',
            City:'',
            State:'',
            Zipcode:'',
            Phone:'',
            Email:'',
            Github:'',
            Bio:'',
            Skills: [],
            Team: ''
        });
    }

    render() {
        return(
            <div className="row">
                <div classname="column">
                    <form onSubmit={this.handleSubmit}>
                        <label>User ID: </label>
                        <input type="text" name="UserID" onChange={this.handleChange}/>
                        <br/>
                        <br/>
                        <label>Password: </label>
                        <input type="text" name="Password" onChange={this.handleChange}/>
                        <br/>
                        <br/>
                        <label>First Name:</label>
                        <input type="text" name="First" onChange={this.handleChange}/>
                        <label>Last Name:</label>
                        <input type="text" name="Last" onChange={this.handleChange}/>
                        <br/>
                        <br/>
                        <label>Address:</label>
                        <input type="text" name="Address" onChange={this.handleChange}/>
                        <label>City:</label>
                        <input type="text" name="City" onChange={this.handleChange}/>
                        <br/>
                        <br/>
                        <label>State:</label>
                        <input type="text" name="State" onChange={this.handleChange}/>
                        <label>Zip:</label>
                        <input type="text" name="Zip" onChange={this.handleChange}/>
                        <br/>
                        <br/>
                        <label>Phone:</label>
                        <input type="text" name="Phone" onChange={this.handleChange}/>
                        <label>Email:</label>
                        <input type="text" name="Email" onChange={this.handleChange}/>
                        <br/>
                        <br/>
                        <label>Github Username:</label>
                        <input type="text" name="Github" onChange={this.handleChange}/>
                        <br/>
                        <br/>
                        <label>Skills:</label>
                        <input type="text" name="Skills" onChange={this.handleChange}/>
                        <br/>
                        <br/>
                        <label>Team:</label>
                        <input type="text" name="Team" onChange={this.handleChange}/>
                        <label>Bio:</label>
                        <input type="text" name="Bio" onChange={this.handleChange}/>
                        <button onClick={this.handleSubmit}>Create New User</button>
                    </form>
                </div>
                <div className="column">
                    
                </div>
            </div>
        )
    }
}

export default CreateProfile;