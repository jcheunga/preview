import React from 'react';

export default class Heading extends React.Component {
	render() {
		return (
		<div className="row">
		<div className="col-md-8 col-md-offset-2">
		<div className="section-title text-center sep-top-md sep-bottom-md">
		<h2 className="upper">{this.props.heading}</h2>
		<p className="lead">{this.props.subheading}</p>
		</div>
		</div>
		</div>
		);
	}
}

Heading.propTypes = {
	heading: React.PropTypes.string,
	subheading: React.PropTypes.string
};
