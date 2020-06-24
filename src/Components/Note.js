import React from 'react';

export default class Note extends React.Component {
	render() {
		console.log("PROPS", this.props);
		return(
			<div>{this.props.name}</div>
		)
	}
}