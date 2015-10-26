import React from 'react';
import { Thumbnail, Button } from 'react-bootstrap';
import ItemActions from 'actions/ItemActions';

import styles from 'scss/components/_singleimage';

export default class SingleImage extends React.Component {

	_onRemoveFromCurrent = () => {
		ItemActions.removeone(this.props.id);
	}

	_onHandleImageClick = () => {
		ItemActions.highlight(this.props.id);
	}

	render() {
		let borderhighlight = this.props.id === this.props.singleid ? styles.imghighlight : null;
		return (
			<div key={this.props.id} onClick={this._onHandleImageClick}>
				<Thumbnail className={borderhighlight} src={this.props.image}/>
				<Button bsStyle="danger" onClick={this._onRemoveFromCurrent}>Remove</Button>
				<a href={this.props.url} target="_blank" rel="nofollow" className="pull-right btn btn-info">Product Link</a>
			</div>
		);
	}
}

SingleImage.propTypes = {
	key: React.PropTypes.string,
	id: React.PropTypes.string,
	image: React.PropTypes.string,
	singleid: React.PropTypes.string,
	name: React.PropTypes.string,
	brand: React.PropTypes.string,
	category: React.PropTypes.string,
	price: React.PropTypes.number,
	url: React.PropTypes.string
};
