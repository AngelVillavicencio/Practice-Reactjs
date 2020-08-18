import React, { Component } from 'react';

class TaskForm extends Component {
	state = {
		title: '',
		responsible: '',
		description: '',
		priority: 'low'
	};

	handleInput=(e)=> {
		const { value, name } = e.target;
		this.setState({
			[name]: value
		});
	}

	handleSubmit=(e)=> {
		e.preventDefault();
		this.props.onAddTask(this.state);

		console.log(this.state);
		console.log('HACKING TO NASA 3 2 1.....');
	}


	render() {
		console.log(this.state);
		return (
			<div className="card">
				<form className="card-body" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input
							type="text"
							name="title"
							onChange={this.handleInput}
							className="form-control"
							placeholder="Titulo"
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							name="responsible"
							onChange={this.handleInput}
							className="form-control"
							placeholder="Responsable"
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							name="description"
							onChange={this.handleInput}
							className="form-control"
							placeholder="Descripcion"
						/>
					</div>
					<div className="form-group">
						<select name="priority" className="form-control" onChange={this.handleInput}>
							<option>Low</option>
							<option>Medium</option>
							<option>High</option>
						</select>
					</div>
					<button type="submit" className="btn btn-primary" />
				</form>
			</div>
		);
	}
}

export default TaskForm;
