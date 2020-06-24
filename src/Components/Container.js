import React from 'react';
import AddNote from './AddNote';
import Note from './Note';

export default class Container extends React.Component {

	state= {
		notes:[]	
	}

	//function to add a new note
	addNote = (note) => {
		//console.log("NOTE", note);
		//addNote function which is being passed as prop is receiving a value
		//via function call from the child component
		this.setState(prevstate => { //second way to setState
			let newArr = [...prevstate.notes]; //shallow copy of prevstate array //newArr becomes a copy of array notes
			newArr.push(note); //pushing new note inside your duplicate array
			return{
				notes: newArr
			};
		})
	}

	render(){
		//console.log("State", this.state);
		const { notes } = this.state;
		return(
			<div className="parent_container">
				<h1>Note Maker</h1>
				<AddNote 
					addNote={this.addNote}
				/>
				<div className="notes_container">
					{
						notes.map((note, place) => 
							(
								<Note
									name={note.name}
								/>
							)
						)
					}
				</div>
			</div>
		)
	}
}
