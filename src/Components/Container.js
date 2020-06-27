import React from 'react';
import AddNote from './AddNote';
import Note from './Note';

export default class Container extends React.Component {

	state= {
		notes:[],
	}

	componentDidMount() {
		let localNotes = localStorage.getItem('notes');
		if(localNotes) {
			this.setState({
				notes: JSON.parse(localNotes)
			})
		}
	}

	//function to add a new note
	addNote = (note) => {
		//console.log("NOTE", note);
		//addNote function which is being passed as prop is receiving a value
		//via function call from the child component
		this.setState(prevstate => { //second way to setState
			let newArr = [...prevstate.notes]; //shallow copy of prevstate array //newArr becomes a copy of array notes
			newArr.push(note); //pushing new note inside your duplicate array
			//using local storage to store data
			localStorage.setItem('notes', JSON.stringify(newArr)); //1st place to set item
			return{
				notes: newArr
			};
		})
	}

	//function to edit a note
	editNote = (value, place) => {
		console.log("VALUES", value, place);
		const tempState = this.state;
		const tempNote = this.state.notes[place];//place is the index of changed note
		console.log("tempNote", tempNote);
		tempNote.name = value; //after getting tempNote object we will update
								// the value of it by using the key which is name
		//dummy state
		tempState.notes[place] = tempNote; //updating the array with new note object by the help index= place
		localStorage.setItem('notes', JSON.stringify(tempState.notes));
		this.setState({notes: tempState.notes})
	}

    //function to delete a note
    deleteNote = (id) => { // id - 2
    	this.setState(prevstate => {
    		let newNotes = prevstate.notes.filter(
    			(note, index) => index != id //id -2 will be skipped and not returned in new array
    		);
    		// update the state with new array -> newNotes
    		localStorage.setItem('notes', JSON.stringify(newNotes));
    		return {
    			notes: newNotes
    		}
    	})
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
									key={note.name}
									name={note.name}
									place={place}
									editNote={this.editNote}
									deleteNote={this.deleteNote}
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
//4. Write the functionality in the function created in parent component



//keys
// array size 5  index [0-4]
// 0
// 1
// 2 - remove(index pass krke)
// 3
// 4
// old array -[ name: hi, name:hello ,name: der, name: sup, name: catchup] -size 5

// new array -[0,1,2,3]

// new array - [ name: hi, name:hello, name: sup, name: catchup] -size 4

// array size 4 index [0-3]
// 0
// 1
// 2
// 3






