import React from 'react';
import { Thumbnail, Button, OverlayTrigger, Popover } from 'react-bootstrap';

export default class SingleCollectionGrid extends React.Component { // BOOTSTRAP POPOVER FOR DESCRIPTION
	render() {
		return (
			<div key={this.props.id} className="col-md-4">
				<Thumbnail src={this.props.image}/>
				<OverlayTrigger trigger="click" rootClose placement="bottom" overlay={
					<Popover>
					<dt>Name</dt>
					<dd>{this.props.name}</dd>
					<dt>Brand</dt>
					<dd>{this.props.brand}</dd>
					<dt>Category</dt>
					<dd>{this.props.category}</dd>
					<dt>Price</dt>
					<dd>{this.props.price}</dd>
					</Popover>}>
					<Button bsStyle="primary">Product Info</Button>
				</OverlayTrigger>
				<a href={this.props.url} target="_blank" rel="nofollow" className="pull-right btn btn-info">Product Link</a>
			</div>
		);
	}
}

SingleCollectionGrid.propTypes = {
	key: React.PropTypes.string,
	id: React.PropTypes.string,
	image: React.PropTypes.string,
	name: React.PropTypes.string,
	brand: React.PropTypes.string,
	category: React.PropTypes.string,
	price: React.PropTypes.number,
	url: React.PropTypes.string
};
