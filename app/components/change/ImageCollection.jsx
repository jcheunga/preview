import React from 'react';
import SingleImage from 'components/change/singleimage';
import Immutable from 'immutable';
import { Button, Row, Col } from 'react-bootstrap';
import ItemActions from 'actions/ItemActions';
import ItemInfo from 'components/change/iteminfo';

export default class ImageCollection extends React.Component { // pagination

	render() {
		let singleidarray = this.props.singleid.toArray();
    let getsingleid = this.props.singleid.size >= 1 ? singleidarray[0].get('id') : null;

		const collection = this.props.images.toKeyedSeq().map((images, key) => {
      return (
        <Col md={4} key={key}><SingleImage id={key} key={key} name={images.get('name')} brand={images.get('brand')} category={images.get('category')}	price={images.get('price')} url={images.get('url')} image={images.get('imglink')} singleid={getsingleid}/></Col>);
    }).toArray();

    /*const tooltip = (<Tooltip><strong>Coming Soon</strong></Tooltip>);
    const comingsoon = (<OverlayTrigger placement="top" overlay={tooltip}><Button>Save this collection</Button></OverlayTrigger>);*/

    let collectionoptions = this.props.images.size === 0 ? null : <div><Button bsStyle="primary" onClick={this.shareCollecton}>Save and Share this collection</Button></div>;
    let shareurl = this.props.shareurl.url ? (<div><p></p><p>This is the link for the collection you just made</p>
              <div><a href={this.props.shareurl.url}>{this.props.shareurl.url}</a></div></div>) : null;
		return (
			<Row>
        <div className="col-md-8">
          {collection}
        </div>
        <div className="col-md-4">
            <dl className="metadata">
              <dt>Selected item info</dt>
              <ItemInfo images={this.props.images} singleid={this.props.singleid} collectioncost={this.props.collectioncost}/>
            </dl>
          <div className="text-center">
            <div className="sep-top-xs">
              {collectionoptions}
              {shareurl}
            </div>
          </div>
        </div>
      </Row>
		);
	}

  shareCollecton = () => {
    let sharecollectiondata = {
      collection: this.props.images,
      collectioncost: this.props.collectioncost
    };
    ItemActions.share(sharecollectiondata);
  }
}

ImageCollection.propTypes = {
	images: React.PropTypes.instanceOf(Immutable.OrderedMap),
	singleid: React.PropTypes.instanceOf(Immutable.OrderedMap),
  collectioncost: React.PropTypes.number,
  shareurl: React.PropTypes.object
};
