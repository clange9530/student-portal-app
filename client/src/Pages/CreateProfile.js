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
        Bio:''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
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
                    </form>
                </div>
                <div className="column">
                    
                </div>
            </div>
        )
    }
}

export default CreateProfile;