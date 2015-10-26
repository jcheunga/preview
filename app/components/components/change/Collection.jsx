import React from 'react';
import Immutable from 'immutable';
import CollectionGrid from 'components/change/CollectionGrid';
import { Row, Grid } from 'react-bootstrap';
import Heading from 'components/change/Heading';
import PreFooter from 'components/change/PreFooter';

export default class Collection extends React.Component { // LOOP THROUGH COLLECTIONS AND FILTER TABS OR BUTTONS // DISPLAY COLLECTION PRICE TOTAL
	render() {
		let aCollections = this.props.CollectionsStore.allCollections;
		const singleCollection = aCollections.toKeyedSeq().map((collections, key) => {
      return (<div className="col-md-4 sep-bottom-md" key={key}><CollectionGrid date={collections.get('date')} likes={collections.get('likes')} id={collections.get('collectionid')} collectioncost={collections.get('collectioncost')} key={key} name={collections.get('name')} collection={collections.get('imagecollection')}/></div>);
    }).toArray();

		return (
			<div>
			<Grid>
			<Heading heading={'COLLECTIONS'} subheading={'Check out the latest and greatest collections made by you.'}/>
			<Row>{singleCollection}</Row>
			</Grid>
			<PreFooter/>
			</div>
		);
	}
}

Collection.propTypes = {
  CollectionsStore: React.PropTypes.object,
  allCollections: React.PropTypes.instanceOf(Immutable.OrderedMap)
};
