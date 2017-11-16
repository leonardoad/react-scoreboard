import React from 'react'

export default class Counter extends React.Component {
	constructor(){
		super();
		this.state = {
			counter: 0,
		}
	}
	decrease(){
		this.setState({
			counter: this.state.counter - 1
		})
	}
	increase(){
		this.setState({
			counter: this.state.counter + 1
		})
	}
    render(){
        return (
        	<div>
	        	<h1>{this.state.counter}</h1>
    	    	<div>
        			<button onClick={this.decrease.bind(this)}>-</button>
        	  		<button onClick={this.increase.bind(this)}>+</button>
        		</div>
        	</div>
        	);
    }
} 