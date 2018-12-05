import React from 'react';

import TeamSkills from './TeamSkills';

class Login extends React.Component {
	

	constructor(props) {
        super(props);
        this.state = {
	password:'',
	name:'',
	logged:''}

  this.handleChangen = this.handleChangen.bind(this);
  this.handleResponse = this.handleResponse.bind(this);
  this.handleChangep = this.handleChangep.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	this.id=this.props.idget.bind(this);
  }

 handleResponse(val,id,teamid,logged){this.setState({logged:val});this.props.idget({_id:id,loggedin:logged,teamid:teamid})}

  handleChangen(event) {
    this.setState({name: event.target.value});
    
  }

handleChangep(event) {
    this.setState({password: event.target.value});
  }
 

  handleSubmit(event) {

fetch('/login/'+this.state.name+'/'+this.state.password).then((response) => {
		return response.json()}).then((res) => {

	if(res.res==='logged in '){
this.handleResponse(res.res,res.id,res.teamid,true);

}
	else{this.handleResponse(res.res,'','',false);}
});

    event.preventDefault();

  }

  render() {
	var getid=this.props.idget
    return (
<div>
	<div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChangen} />
        </label>
	<label>
          Password:
          <input type="text" value={this.state.password} onChange={this.handleChangep} />
        </label>
        <input type="submit" value="Submit" />
      </form>
	</div>
<div>
{this.state.logged}
</div>
</div>

		);
	}
}
export default Login;
