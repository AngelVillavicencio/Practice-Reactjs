import React, { Component } from 'react';

class TaskForm extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			responsible: '',
			descripcion: '',
			priority: 'low'
		};
	}

	handleInput(e) {
		console.log(e.target.value, e.target.name);
	}

	render() {
		return (
			<div className="card">
				<form className="card-body">
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
