import React from 'react';
import { Switch, Route } from 'react-router-dom';


const Teams = () => (
     <div>
       <div className="row">
           <h3 class="header">Team Profile</h3>
       </div>

        <div className="row">
            <div className="column">
                <h4>Team Members</h4>
                <ul id="lists">
                    <li>Name 1</li>
                    <li>Name 2</li>
                    <li>Name 3</li>
                </ul>
                <h4>Team Profile</h4>
                <ul id="lists">
                    <li>Skill 1</li>
                    <li>Skill 2</li>
                    <li>Skill 3</li>
                </ul>
            </div>
            <div className="column">
                <th>Detailed Info</th>
                <table>
                    <th>Product Manager:</th>
                    <tr>Manager Name </tr>
                    <th>Scrum Master:</th>
                    <tr>Scrum Master Name </tr>
                    <th>Primary Contact:</th>
                    <tr>Primary Contact Name </tr>
                    <tr>Primary Contact Address 1 </tr>
                    <tr><td>City</td> <td>State</td> <td>,</td> <td>Zip Code</td></tr>
                    <tr>Primary Contact Phone #</tr>
                    <tr><a href="/SendMail/?emailFrom=yourname@yourserver.com">Contact email</a></tr>
                </table>
            </div>
            <div className="column">
                <h4>Team Logo</h4>
                <button>Upload</button>

            </div>
        </div>






    </div>
)
export default Teams;
