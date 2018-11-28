import React, { Component } from 'react';

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="card bg-light mb-3">
				<div className="card-header">{this.props.title}</div>
				<div className="card-body">
					{this.props.title == 'Me' && (
						<React.Fragment>
							<h5 className="card-title">Luke Chadwick</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
						</React.Fragment>
					)}
					{this.props.title == 'Contact Me' && (
						<React.Fragment>
							<h5 className="card-title center">Email, Linked-in or GitHub</h5>
							<div className="center">
								<a href="www.google.com" target="blank">
									<img
										draggable="false"
										src="email.png"
										className="toolImage"
									/>
								</a>
								<a href="www.google.com" target="blank">
									<img
										draggable="false"
										src="linkedin.png"
										className="toolImage"
									/>
								</a>
								<a href="www.google.com" target="blank">
									<img
										draggable="false"
										src="github.png"
										className="toolImage"
									/>
								</a>
							</div>
						</React.Fragment>
					)}
					{this.props.title == 'Tools' && (
						<React.Fragment>
							<p>Tools</p>
						</React.Fragment>
					)}
					{this.props.title == 'Projects' && (
						<React.Fragment>
							<p>Projects</p>
						</React.Fragment>
					)}
				</div>
			</div>
		);
	}
}

export default Card;
