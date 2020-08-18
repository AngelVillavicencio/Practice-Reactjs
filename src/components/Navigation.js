import React, { Component } from 'react';
import TaskForm from '../components/TaskForm.js';
import { tasks, pendientes } from '../tasks.json';
console.log(tasks);

class Navigation extends Component {
	
		state = {
			tasks,
			pendientes
		};
	

	handleAddTask=(task)=>{
		this.setState({
			tasks:[...this.state.tasks,task]
		})
	}

	removeTask=(i)=>{
		this.setState({
			tasks:this.state.tasks.filter((e,index)=>{
				return i!==index
			})
		})

	}
	 
	render() {
		const tasks = this.state.tasks.map((task, i) => {
			return (
				<div className="col-md-4" key={`${task.title}-${i}`}>
					<div className="card mt-4">
						<div className="card-header">
							<h3>{task.title}</h3>
							<span className=" badge badge-pill badge-danger ml-2">{task.priority}</span>
						</div>
						<div className="card-body">
							<p>{task.description}</p>
							<p>
								<mark>{task.responsible}</mark>
							</p>
						</div>
						<div className="card-footer">
							<button className="btn btn-danger"
							onClick={()=>{
								this.removeTask(i)
							}}>
								Delete
							</button>
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
                    <div className="row mt-4">
                        <div className="col-md-3">
                        <TaskForm onAddTask={this.handleAddTask} />
                        </div>
                    </div>
                    <div className="col-md-9">
    					<div className="row">
            				{tasks}
   						</div>

					</div>

					
				</div>
				
			</div>
		);
	}
}
export default Navigation;
