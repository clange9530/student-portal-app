import React from 'react';
import Button from '@material-ui/core/Button';
import TeamSkills from './TeamSkills';

class Login extends React.Component {
	

	constructor(props) {
        super(props);
        this.state = {
	password:'',
	name:'',
	logged:''}
		
  this.back = this.back.bind(this);
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
	
back() {
        this.props.props.history.goBack()
    }

  render() {
	var getid=this.props.idget
    return (
<div>
	<br></br>
	<br></br>
	<br></br>
	<div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChangen} />
        </label>
	<div>
	<label>
          Password:
          <input type="password" value={this.state.password} onChange={this.handleChangep} />
        </label>
	</div>
 	<br></br>
	<Button color="primary" variant="contained" type="submit"> login</Button> 

      </form>
	</div>
<div>
{this.state.logged}
<Button variant="outlined" color="secondary" onClick={this.back}> previous page</Button>
</div>
</div>

		);
	}
}
export default Login;
