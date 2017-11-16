import React from 'react'


import Team from './Team'
import Match from './Match'

export default class Scoreboard extends React.Component {
	constructor(){
	 	super();
	 	this.state = {
	 		home_score:0,
	 		guest_score:0,
	 	}
	}
	increaseScoreHome(){
		this.setState({
			home_score: this.state.home_score + 1
		})
	}
	increaseScoreGuest(){
		this.setState({
			guest_score: this.state.guest_score + 1
		})
	}
    render(){
        return (
        	<div> 
    	    	<div style={{float: "left", marginRight: "30px"}}>
    	    		<h3>Home</h3>
    	    		<Team name={this.props.home.name} score={this.state.home_score} increaseScore={this.increaseScoreHome.bind(this)}/>
    	    	</div>
    	    	<div style={{float: "left", marginRight: "30px"}}>
    	    		<Match  local={this.props.match.local} date={this.props.match.date} time={this.props.match.time} />
    	    	</div>
    	    	<div style={{float: "left", marginRight: "30px"}}>
    	    		<h3>Guest</h3>
    	    		<Team name={this.props.guest.name}  score={this.state.guest_score}  increaseScore={this.increaseScoreGuest.bind(this)}/>
    	    	</div>
        	</div>
        	);
    }
} 