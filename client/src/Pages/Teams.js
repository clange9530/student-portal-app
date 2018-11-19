import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Teams extends Component {

     constructor(props){
          super(props);

          this.state = {
               _id: "",
               teamName: "",
               members: [],
               projects: [],
               skills: [],
               prod_mgr: "",
               scrum_mstr: "",
               primary_cont: "",
               gitHub_repo: ""
          };
     }


     componentDidMount() {
          this.getTeamInfo();
                    console.log(this.state.teamName);
     }

getTeamInfo = () => {
     fetch('/api/teams/5bf24cd3e876b806a9de6f8f')
          .then(response => {
               console.log(response);
               return response.json()
          })
          .then(Team => this.setState( {
               _id: Team._id,
               teamName: Team.teamName,
               members: Team.members,
               projects: Team.projects,
               skills: Team.skills,
               prod_mgr: Team.prod_mgr,
               scrum_mstr: Team.scrum_mstr,
               primary_cont: Team.primary_cont,
               gitHub_repo: Team.gitHub_repo
          }));
}


render() {
     return (
     <div>
       <div className="row">
           <h3 class="header">{this.state.teamName}</h3>
       </div>

        <div className="row">
            <div className="column">
                <h4>Team Members</h4>
                <ul id="lists">
                     {
                          this.state.members.map((val, index) => {
                               return(
                                    <li key={index}>
                                        {val}
                                    </li>
                               );
                          })
                     }
                </ul>
                <h4>Team Profile</h4>
                     <ul id="lists">
                          {
                               this.state.skills.map((val, index) => {
                                    return(
                                         <li key={index}>
                                             {val}
                                         </li>
                                    );
                               })
                          }
                     </ul>
            </div>
            <div className="column">
                <th>Detailed Info</th>
                <table>
                    <th>Product Manager:</th>
                    <tr>{this.state.prod_mgr} </tr>
                    <th>Scrum Master:</th>
                    <tr>{this.state.scrum_mstr} </tr>
                    <th>Primary Contact:</th>
                    <tr>{this.state.primary_cont} </tr>
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
}
}


export default Teams;
