import React from 'react';
import ImageCollection from 'components/change/ImageCollection';
import Immutable from 'immutable';
import HomeInitial from 'components/change/HomeInitial';

export default class Output extends React.Component {
	render() {
		let initialhome = this.props.images.size === 0 ? <HomeInitial /> : <ImageCollection images={this.props.images} singleid={this.props.hitem} shareurl={this.props.shareurl} collectioncost={this.props.collectioncost}/>;
		return (
		<div className="sep-bottom-lg">
		{initialhome}
		</div>
		);
	}
}

Output.propTypes = {
	hitem: React.PropTypes.instanceOf(Immutable.OrderedMap),
	images: React.PropTypes.instanceOf(Immutable.OrderedMap),
	shareurl: React.PropTypes.object,
	collectioncost: React.PropTypes.number
};
