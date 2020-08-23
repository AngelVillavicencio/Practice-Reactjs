import React, { Component } from 'react';
import header from '../../images/badge-header.svg';
import Navbar from '../Navbar.js';
import '../style/BadgeNew.css';
import Badge from '../Badge.js';
import BadgeForm from '../BadgeForm.js';
class BadgeNew extends Component {
	state = {
		form: {
			firstName: '',
			lastName: '',
			email: '',
			jobTitle: '',
			instagram: ''
		}
	};

	handleChange = (e) => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value
			}
		});
	};
	render() {
		return (
			<div>
				<Navbar />
				<div className="BadgeNew__hero">
					<img className="img-fluid" src={header} alt="Logo" />
				</div>

				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge
								firstName={this.state.form.firstName}
								lastName={this.state.form.lastName}
								jobTitle={this.state.form.jobTitle}
								instagram={this.state.form.instagram}
								email={this.state.form.email}
								avatarUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
							/>
						</div>
						<div className="col-6">
							<BadgeForm onChange={this.handleChange} formValues={this.state.form} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BadgeNew;
