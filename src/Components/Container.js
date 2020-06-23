import React from 'react';
import AddNote from './AddNote';

export default class Container extends React.Component {

	addNote = (note) => {
		console.log("NOTE", note);
		//addNote function which is being passed as prop is receiving a value
		//via function call from the child component
	}

	render(){
		return(
			<div className="parent_container">
				<h1>Note Maker</h1>
				<AddNote 
					addNote={this.addNote}
				/>
			</div>
		)
	}
}
