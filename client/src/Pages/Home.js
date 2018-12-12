import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

class Home extends Component{
    render(){
        return(
            <div style={{'text-align': 'center'}}>
                <Card style={{'display': 'inline-block', 'width': '50%', 'margin-top': '50px'}}>
                    <Typography variant="h6">Welcome to the UF Team and Project Management app!</Typography>
                    <Typography variant="h8">Please use the navbar above to make a choice.</Typography>
                </Card> 
            </div>
        )
    }    
}

export default Home;