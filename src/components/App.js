import React from 'react'

import Scoreboard from './Scoreboard'

const data = {
	match: {
		local: "Grêmio Arena/RS",
		date: "Nov 16th 2017",
		time: "10pm",
	},
	home: {
		name: "Gremio",
	},
	guest: {
		name: "Interacional",
	}
};

export default class App extends React.Component {
    render(){
        return (
        	<div>
        	  <Scoreboard {...data}/>
        	</div>
        	);
    }
} 