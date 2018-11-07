import React from 'react';
//Import statement to import API that will GET data for individual profile from MongoDB.
//Import statement to import profile picture from Amazon s3.


const Users = () => (
    <div>
       <div className="row">
           <h3 class="header">Individual Profile</h3>
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
                    <tr>User's Name</tr>
                    <tr>Address 1</tr>
                    <tr>Address 2</tr>
                    <tr>
                        <td>City</td>
                        <td>State</td>
                        <td>Zip</td>
                    </tr>   
                    <tr>Email (BUTTON FOR EMAIL)</tr> 
                    <tr>Phone #</tr>
                    <tr>Link to user's github</tr>
                </table>
                <p>User's Bio</p>
                <button>Create New Profile</button>
            </div>
            <div className="column">
                <h4>Profile Pic</h4>
                <button>Upload</button>

            </div>
        </div>






    </div>
)
export default Users;