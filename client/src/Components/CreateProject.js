import React from 'react';
import { Link } from "react-router-dom";

class CreateProject extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {name: '',
        description:'',
	res:''
        };
        
    
        this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
    
        this.setState({
          [name]: value
        });
      }
 handleResponse(val,id){this.setState({logged:val})}


  handleSubmit(event) {


fetch('/projects/create/'+this.state.name+'/'+this.state.description+'/'+this.props.user["_id"]).then(function(response) {
return response.json()}).then(function(response){
	if(response.res==='project created')
		{this.setState({res:response.res});}
	else{this.setState({res:"Error try changing the project title. If the error persists contact an administrator."})}
	}.bind(this))
event.preventDefault();
  }
	
  render() {	
	if (this.props.user["logged"]===false)
	{
    return (
	<div>
	<h1>You must be logged in</h1>
	</div>
	);
	}
	else
	if (this.state.res=='project created')
	{
    return (
	
	<h1>Congratulations you created a project.</h1>
	);
	}
	else
	return(

<div>
	<h1>Create a Project</h1>
	<div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Project Title:
	  <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
        </label>
	<br></br>
<br></br>
	<label>
          Description:
	<textarea rows="5" name="description" value={this.state.description} onChange={this.handleInputChange}></textarea>
        </label>
<br></br>
<br></br>
        <input type="submit" value="Submit" />
      </form>
	</div>
	{this.state.res}
<div>
</div>
</div>


		);
	}
}
export default CreateProject;
