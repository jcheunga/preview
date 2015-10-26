import React from 'react';
import { Link } from 'react-router';
import CollectionsActions from 'actions/CollectionsActions';
import { OverlayTrigger, Popover } from 'react-bootstrap';

export default class CollectionGrid extends React.Component {

	_increaseLike = () => {
		CollectionsActions.increment(this.props.id);
	}

	render() {
		let makejs = this.props.collection.toJS();
		let scollection = makejs[0];
		let collectionnames = [];
		for (let key in scollection) {
			if (scollection.hasOwnProperty(key)) {
				let obj = scollection[key];
				collectionnames.push(
					<OverlayTrigger key={key} trigger="click" rootClose placement="bottom" overlay={
					<Popover><dt>Name</dt>
					<dd>{obj.name}</dd>
					<dt>Brand</dt>
					<dd>{obj.brand}</dd>
					<dt>Category</dt>
					<dd>{obj.category}</dd>
					<dt>Price</dt>
					<dd>${obj.price}</dd></Popover>}>
					<p>{obj.name}</p>
    			</OverlayTrigger>);
			}
		}

		let singlecollectionid = '/collection/'+ this.props.id;
		return (						
			<div className="panel panel-default" key={this.props.id}>
				<div className="panel-body">
					<Link to={singlecollectionid}>
						<div className="product-title"><span className="upper">Collection ID: {this.props.id}</span>						
			      </div>
		      </Link>
		      <div className="sep-top-xs">{collectionnames}</div>
		      <div className="product-detail">
		      	<div><a className="cursorp"><i onClick={this._increaseLike} className="fa fa-heart fa-lg"></i></a>&nbsp;{this.props.likes}</div>
		        <div className="price-shop text-right">
		          <span>Total Collection Cost: </span><ins>${this.props.collectioncost}</ins>
		        </div>
		      </div>
		    </div> 
      </div>
		);
	}
}

CollectionGrid.propTypes = {
	key: React.PropTypes.string,
	id: React.PropTypes.string,
	name: React.PropTypes.string,
	collection: React.PropTypes.object,
	collectioncost: React.PropTypes.string
};
