import React from 'react'

export default class Goal extends React.Component {
	handleClick(e){
        e.preventDefault();
        this.props.increaseScore();

    }
    render(){
        return (
        	<button onClick={this.handleClick.bind(this)}>Goal!</button>
        	);
    }
} 