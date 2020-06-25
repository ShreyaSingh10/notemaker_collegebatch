import React from 'react';

export default class Note extends React.Component {

	state ={
		name:''
	}

	componentDidMount() { //storing value in state so that the notes are visible
		this.setState({
			name: this.props.name
		})
	}

	handleChange = (e) => {
		const name = e.target.value;
		this.setState({name});// updating the note if there are any changes
	}

	// smrandomfunc = () => {
	// 	this.props.editNote(this.state.name, this.props.place);
	// }

	render() {
		//console.log("STATE", this.state);
		const {name} = this.state;
		const {place, editNote} = this.props;
		return(
			<div>
				<input
					type="text"
					value={this.state.name}
					onChange={this.handleChange}
					onBlur={() => editNote(name,place)}
				/>
			</div>
		)
	}
}