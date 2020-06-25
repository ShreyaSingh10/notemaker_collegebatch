import React from 'react';
import AddNote from './AddNote';
import Note from './Note';

export default class Container extends React.Component {

	state= {
		notes:[],
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

	//edit a note
	editNote = (value, place) => {
		console.log("VALUES", value, place);
		const tempState = this.state;
		const tempNote = this.state.notes[place];//place is the index of changed note
		console.log("tempNote", tempNote);
		tempNote.name = value; //after getting tempNote object we will update
								// the value of it by using the key which is name
		//dummy state
		tempState.notes[place] = tempNote; //updating the array with new note object by the help index= place
		this.setState({notes: tempState.notes})
	}


	render(){
		console.log("State", this.state);
		const { notes } = this.state;
		return(
			<div className="parent_container">
				<h1>Note Maker</h1>
				<AddNote 
					addNote={this.addNote}
				/>
				<div className="notes_container">
					{
						this.state.notes.map((note, place) => 
							(
								<Note
									name={note.name}
									place={place}
									editNote={this.editNote}
								/>
							)
						)
					}
				</div>
			</div>
		)
	}
}


//how child can communicate with parent??
//1. make a function in parent
//2. pass that function as a prop to child
//3. call/use the fuunct with the req param
