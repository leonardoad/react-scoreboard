import React from 'react'
import PropTypes from 'prop-types'

export default class Match extends React.Component {
	 
    render(){
        return (
        	<div>
                <h3>{this.props.local}</h3>
                <div>
                    <span>{this.props.date} </span>
                    <span> - </span>
                    <span>{this.props.time}</span>
                </div>
                <div>
                    <span>{this.props.weather} </span> 
                </div>
    	    	 
        	</div>
        	);
    }
} 


Match.propTypes = {
    local: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
}