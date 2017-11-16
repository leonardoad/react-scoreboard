import React from 'react'

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
    	    	 
        	</div>
        	);
    }
} 