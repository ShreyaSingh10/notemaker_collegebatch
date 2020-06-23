import React from 'react';

export default class AddNote extends React.Component{

	state={
		name:''
	}

	//to construct a note string
	handleChange = (e) => {
		const name = e.target.value;
		this.setState({name: name});//-> this.setState({name});
	}

	//on form submit ur note should reach ur parent 
	handleSubmit = e => {
		//console.log("Submitting");
		e.preventDefault();

		//constructing a key value pair for each note
		const note ={
			name: this.state.name
		}

		//call or use the addNote function coming as prop from the parent
		//to pass ur value i.e the note created
		this.props.addNote(note);
	}

	render(){
		//console.log("PROPS", this.props);
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						placeholder="Add a note"
						type="text"
						onChange={this.handleChange}
					/>
					<button type="submit">Add Note</button>
				</form>
			</div>
		)
	}
}


//read about event bubbling, event propagation