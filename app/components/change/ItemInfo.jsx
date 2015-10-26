import React from 'react';
import SingleInfo from 'components/change/singleinfo';
import Immutable from 'immutable';

export default class ItemInfo extends React.Component {
	/*shouldComponentUpdate = (nextProps) => {
		return this.props.singleid !== nextProps.singleid;
	}

	componentWillReceieveProps = () => {

	}*/
	render() {
		let singleidarray = this.props.singleid.toArray();
		let getsingleid = this.props.singleid.size >= 1 ? singleidarray[0].get('id') : null;

		const panel = this.props.images.toKeyedSeq().map((images, key) => {
      return (<SingleInfo id={key} key={key} name={images.get('name')} brand={images.get('brand')} category={images.get('category')}
      	price={images.get('price')} url={images.get('url')} image={images.get('imglink')} singleid={getsingleid} collectioncost={this.props.collectioncost}/>);
    }).toArray();

		return (
			<div>
				{panel}
			</div>
		);
	}
}

ItemInfo.propTypes = {
	images: React.PropTypes.instanceOf(Immutable.OrderedMap),
	singleid: React.PropTypes.instanceOf(Immutable.OrderedMap),
	collectioncost: React.PropTypes.number
};
