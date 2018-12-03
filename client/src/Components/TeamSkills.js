//© 2018 kaboom18
//All rights reserved.
//_TeamsStatic:{'Team A':['JS','HTML'],'Team B':['C++','JS'],'Team C':['JS','HTML','C++']},
import React from 'react';
import { Link } from "react-router-dom";



class TeamSkills extends React.Component {
	

	constructor(props) {
        super(props);
        this.state = {

	Skills:[],
        _TeamsStatic:{},
	_TeamsStaticItr:[],
	_Checked:[],
	_TeamsFilter:{},
	ids:{},
	TeamsFilterItr:[],///filled, teams filter


}

	    this.handleClick = this.handleClick.bind(this);
	}

componentDidMount(){
fetch('/teams/').then((response) => {
		return response.json()}).then((res) => {
var tmstitr = [];
var tmst = {};
var ids = {}
var Skills = [];
var gat;
for (var i = 0; i < res["teams"].length; i++)
{ 
tmstitr.push(res["teams"][i]["teamName"]);tmst[res["teams"][i]["teamName"]]=res["teams"][i]["skills"];ids[res["teams"][i]["teamName"]]="/teams/"+res["teams"][i]["_id"];

if (i==0){
	for (var j=0; j<res["teams"][i]["skills"].length;j++)
	{ Skills.push(res["teams"][i]["skills"][j])}
	}
else{
	for (var j=0; j<res["teams"][j]["skills"].length;j++)
		{
		gat=1
			for (var x=0; x<Skills.length;x++){
 			if (Skills[x] == res["teams"][i]["skills"][j])
			{gat=0;break;} }
			if (gat==1){Skills.push(res["teams"][i]["skills"][j])}
		}


}

this.setState({ids:ids});
this.setState({_TeamsStaticItr:tmstitr});
this.setState({_TeamsStatic:tmst});
this.setState({Skills:Skills});


}
});
}

	  handleClick(event) {
		const target = event.target;
    		const value = target.type === 'checkbox' ? target.checked : target.value;
    		const name = target.name


var temp,i,j,objr,plcr,gate,x,k;
if (value === true)
{
	//if Checked == empty
		//set teamsfilter = []
		//
	temp=this.state._Checked;
	temp.push(name);
	this.setState({_Checked:temp});
	if (this.state.TeamsFilterItr.length ==0)
		{
		for (i = 0; i < this.state._TeamsStaticItr.length; i++) { 
		   for (j = 0; j < this.state._TeamsStatic[this.state._TeamsStaticItr[i]].length; j++) { 
				if (this.state._TeamsStatic[this.state._TeamsStaticItr[i]][j].toLowerCase() == name.toLowerCase()){
					temp=this.state._TeamsFilter
					temp[this.state._TeamsStaticItr[i]] = this.state._TeamsStatic[this.state._TeamsStaticItr[i]]
					this.setState({_TeamsFilter: temp});
					plcr=this.state.TeamsFilterItr
					plcr.push(this.state._TeamsStaticItr[i]);
					this.setState({TeamsFilterItr:plcr});
					break;
		}
		}
		}
		}
	else
	{
		//for i in TeamsFilterItr
		for (i = 0; i < this.state.TeamsFilterItr.length; i++) 
		{ 
			gate=0
			// for j in TeamsFilterItr[i]
			try
			{
			for (j = 0; j < this.state._TeamsFilter[this.state.TeamsFilterItr[i]].length; j++) 
				{ 
				if (this.state._TeamsFilter[this.state.TeamsFilterItr[i]][j].toLowerCase() ==name.toLowerCase())
					{
					gate=1;
					break;
					}
				}

			if (gate == 0)
				{
				//remove
				temp=this.state._TeamsFilter
				delete temp[this.state.TeamsFilterItr[i]]
				this.setState({_TeamsFilter: temp});
				temp = this.state.TeamsFilterItr;
				temp.splice(i,1);
				this.setState({TeamsFilterItr:temp});
				i--;
				}
			
			}
			catch(err){}
		}
	}
}
		
//if event is checked == False

if (value === false){
	
	
	var check_temp=this.state._Checked;
	for (i = 0; i < this.state._Checked.length; i++) {
	if(this.state._Checked[i].toLowerCase()===name.toLowerCase()){
		check_temp.splice(i,1);
		this.setState({_Checked:check_temp});
		break;
		}
	} 

	if (this.state._Checked.length ===0)
		{
		this.setState({_TeamsFilter:{}});
		this.setState({TeamsFilterItr:[]});
		}
		//set teamsfilter = []
		//

	plcr=[];
	for (i = 0; i < this.state._TeamsStaticItr.length; i++) {
		gate=0;
		for (j = 0; j < this.state.TeamsFilterItr.length; j++) {
		if (this.state._TeamsStaticItr[i]==this.state.TeamsFilterItr[j])
			{gate=1;break;}
		}
		if(gate==0){
		plcr.push(this.state._TeamsStaticItr[i])
		}
	}

	//checkiftheyhave allthechecked
	for(x=0; x <plcr.length; x++)
	{
		gate=0;
		for (k=0;k< this.state._Checked.length; k++)
		 {
	
			for (i = 0; i < this.state._TeamsStatic[plcr[x]].length; i++) {
			if (this.state._TeamsStatic[plcr[x]][i]===this.state._Checked[k])
				{gate=0;break;}
			gate = 1;
			}
			if(gate===1)
			{break}

		}
		if(gate===0)
		{
			
			temp=this.state._TeamsFilter
			temp[plcr[x]] = this.state._TeamsStatic[plcr[x]]
			this.setState({_TeamsFilter: temp});
			objr=this.state.TeamsFilterItr
			objr.push(plcr[x]);
			this.setState({TeamsFilterItr:objr});
		}

		
	}//end plcr


}



	}



    
	render() {

		var allTeams = this.state._TeamsStaticItr.map((datas) =>
  				<li><Link to={this.state.ids[datas] }>{datas}</Link></li>);
		
		
		const listTeams = this.state.TeamsFilterItr.map((datas) => 
  				<ul><Link to={this.state.ids[datas]}>{datas}</Link></ul>);
		const skills = this.state.Skills.map((data) =>
				<a>{data} <input type="checkbox" name={data} onClick={this.handleClick}/></a>);
		
		return (
			   <div>

      			<div class="container">
			<h1>View Skills of Teams</h1>
      			<div class="row">
        			<div class="col-md-4">
          			<h2>Skills</h2>
					{skills}
        			</div>
				<div class="col-md-4">
				  <h2>Teams</h2>
				{listTeams}
			       </div>
				<div class="col-md-4">
				  <h2>All Teams ({this.state._TeamsStaticItr.length})</h2>
				  {allTeams}
				</div>
      </div>

    </div>
    </div>

		);
	}
}
export default TeamSkills;
