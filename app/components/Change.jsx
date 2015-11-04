import React from 'react';
import Urlboxes from 'components/change/Urlboxes';
import Output from 'components/change/Output';
import { Row, Col } from 'react-bootstrap';
import Heading from 'components/change/Heading';
import Footer from 'components/Footer';

export default class Change extends React.Component {

  render() {
    return (
    <div>
		<div className="container vh80">
		<Row>
		<Heading heading={'CREATE'} subheading={'This is where you create a collection to save or share'}/>
		<Col md={12}>
		<Urlboxes/>
		</Col>
		</Row>
		<Row>
		<Col md={12}>
		<Output images={this.props.ItemStore.newCollection} hitem={this.props.ItemStore.highlightedItem} shareurl={this.props.ItemStore.savedCollection} collectioncost={this.props.ItemStore.collectionCost}/>
		</Col>
		</Row>
		</div>
		<Footer />
		</div>
    );
  }
}

Change.propTypes = {
  ItemStore: React.PropTypes.object
};
