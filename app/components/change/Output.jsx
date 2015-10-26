import React from 'react';
import ImageCollection from 'components/change/imagecollection';
import Immutable from 'immutable';
import HomeInitial from 'components/change/homeinitial';

export default class Output extends React.Component {
	render() {
		// const testid = this.props.singleid.toMap();
		// const abc = this.props.hitem.size >= 1 ? testid.get('id') : null;		
  	let initialhome = this.props.images.size === 0 ? <HomeInitial /> : <ImageCollection images={this.props.images} singleid={this.props.hitem} shareurl={this.props.shareurl} collectioncost={this.props.collectioncost}/>; // COMPLETE THIS WITH ANIMATIONS
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
	shareurl: React.PropTypes.object
};
