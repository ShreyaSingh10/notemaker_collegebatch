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
		e.preventDefault();// to prevent page from refreshing

		//constructing a key value pair for each note
		const note ={
			name: this.state.name
		} //how to send this value to parent-> go to parent and make a function and
		//pass it as a prop

		//After passing the function from parent to this component
		//call or use the addNote function coming as prop from the parent
		//to pass ur value i.e the note created
		this.props.addNote(note);
		this.setState({name: ''}); //making the input element empty 
	}

	render(){
		//console.log("State", this.state.name);
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						placeholder="Add a note"
						type="text"
						onChange={this.handleChange}
						value={this.state.name}
					/>
					<button type="submit">Add Note</button>
				</form>
			</div>
		)
	}
}


//read about event bubbling, event propagation