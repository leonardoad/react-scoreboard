import React from 'react'
import PropTypes from 'prop-types'

import Goal from './Goal'

export default class Team extends React.Component {
	 
    render(){
        return (
        	<div>
	        	<h2>{this.props.name}</h2>
	        	<h1>{this.props.score}</h1>
    	    	<div>
        			<Goal increaseScore={this.props.increaseScore} />
        	  	</div>
        	</div>
        	);
    }
} 


Team.propTypes = {
    score: PropTypes.number.isRequired, 
}