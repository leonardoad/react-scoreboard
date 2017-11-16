import React from 'react'
import PropTypes from 'prop-types'


import Team from './Team'
import Match from './Match'

export default class Scoreboard extends React.Component {
	constructor(){
	 	super();
	 	this.state = {
	 		home_score: 0,
	 		guest_score: 0,
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
    	const {match, home, guest} = this.props;
    	const style = {float: "left", marginRight: "30px"};

        return (
        	<div> 
    	    	<div style={style}>
    	    		<h3>Home</h3>
    	    		<Team name={home.name} score={this.state.home_score} increaseScore={this.increaseScoreHome.bind(this)}/>
    	    	</div>
    	    	<div style={style}>
    	    		<Match {...match}/>
    	    	</div>
    	    	<div style={style}>
    	    		<h3>Guest</h3>
    	    		<Team name={guest.name}  score={this.state.guest_score}  increaseScore={this.increaseScoreGuest.bind(this)}/>
    	    	</div>
    	    	<div style={{clear: "both"}}>
    	    	</div>
        	</div>
        	);
    }
} 

Scoreboard.propTypes = {
	home: PropTypes.shape({
		name: PropTypes.string.isRequired,
	}),
	match: PropTypes.object.isRequired,
	guest: PropTypes.object.isRequired,
}