import React, { Component } from 'react';
import TaskForm from '../components/TaskForm.js';
import { tasks, pendientes } from '../tasks.json';
console.log(tasks);

class Navigation extends Component {
	constructor() {
		super();
		this.state = {
			tasks,
			pendientes
		};
	}
	render() {
		const tasks = this.state.tasks.map((task, i) => {
			return (
				<div className="col-md-4">
					<div className="card mt-4">
						<div className="card-header">
							<h3>{task.title}</h3>
							<span className=" badge badge-pill badge-danger ml-2">{task.priotity}</span>
						</div>
						<div className="card-body">
							<p>{task.description}</p>
							<p>
								<mark>{task.responsible}</mark>
							</p>
						</div>
					</div>
				</div>
			);
		});

		const pendientes = this.state.pendientes.map((pending, i) => {
			return <div className="Pending">{pending.title}</div>;
		});
		return (
			<div>
				<nav className="navbar navbar-dark bg-dark">
					<a href="#" className="text-white">
						tasks <span className="badge badge-pill badge-light ml-2">{this.state.tasks.length}</span>
					</a>
				</nav>

				<div className="container">
					<TaskForm />
				</div>
				<div className="container">
					<div className="row mt-4">{tasks}</div>
				</div>
			</div>
		);
	}
}
export default Navigation;
