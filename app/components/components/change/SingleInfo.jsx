import React from 'react';

import styles from 'scss/components/_singleimage';

export default class SingleInfo extends React.Component {
	render() {
		let hideinfo = this.props.id !== this.props.singleid ? styles.hideinfo : null;
		return (
			<div key={this.props.id} className={hideinfo}>
				<dt>Name</dt>
				<dd>{this.props.name}</dd>
				<dt>Brand</dt>
				<dd>{this.props.brand}</dd>
				<dt>Category</dt>
				<dd>{this.props.category}</dd>
				<dt>Price</dt>
				<dd>${this.props.price}</dd>
				<dt>Total collection cost: ${this.props.collectioncost}</dt>
				<dt><a href={this.props.url} target="_blank" rel="nofollow">Product Link</a></dt>
			</div>
		);
	}
}

SingleInfo.propTypes = {
	key: React.PropTypes.string,
	id: React.PropTypes.string,
	singleid: React.PropTypes.string,
	name: React.PropTypes.string,
	brand: React.PropTypes.string,
	category: React.PropTypes.string,
	price: React.PropTypes.number,
	url: React.PropTypes.string,
	collectioncost: React.PropTypes.number
};
