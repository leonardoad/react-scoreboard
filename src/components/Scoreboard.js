import React from 'react'


import Team from './Team'
import Match from './Match'

export default class Scoreboard extends React.Component {
	 
    render(){
        return (
        	<div> 
    	    	<div style={{float: "left", marginRight: "30px"}}>
    	    		<h3>Home</h3>
    	    		<Team />
    	    	</div>
    	    	<div style={{float: "left", marginRight: "30px"}}>
    	    		<Match />
    	    	</div>
    	    	<div style={{float: "left", marginRight: "30px"}}>
    	    		<h3>Guest</h3>
    	    		<Team />
    	    	</div>
        	</div>
        	);
    }
} 