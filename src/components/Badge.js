import React, { Component } from 'react';
import './style/Badge.css';
import confLogo from '../images/badge-header.svg';
class Badge extends Component {
	render() {
		/*const { firstName, lastName, avatarUrl, jobtitle, instagramId } = this.props;*/
		return (
			<div className="Badge">
				<div className="Badge__header">
					<img src={confLogo} alt="Logo de Badge" />
				</div>
				<div className="Badge__section-name">
					<img className="Badge__avatar" src={this.props.avatarUrl} alt="Avatar" />
					<h1>
						{this.props.firstName} <br /> {this.props.lastName}
					</h1>
				</div>
				<div className="Badge__section-info">
					<p>{this.props.jobTitle}</p>
					<p>{this.props.instagram}</p>
				</div>
				<div className="Badge__footer">#platziConf</div>
			</div>
		);
	}
}

export default Badge;
