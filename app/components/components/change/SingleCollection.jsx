import React from 'react';
import CollectionsActions from 'actions/CollectionsActions';
import SingleCollectionGrid from 'components/change/SingleCollectionGrid';
import PreFooter from 'components/change/PreFooter';

export default class SingleCollection extends React.Component { // FIND ID FROM COLLECTIONS IF IT DOESNT EXIST DISPLAY NO COLLECTION FOUND // ADD COMMENTS

	render() {
		let scollection = this.props.CollectionsStore.allCollections.toJS();
		let scollectionobj = {};
		for (let key in scollection) {
			if (scollection.hasOwnProperty(key)) {
				let obj = scollection[key];
				if (obj.collectionid === this.props.params.collectionId) {
					scollectionobj = obj;
				}
			}
		}
		let newdate = new Date(scollectionobj.date);
		let scollectionimages = scollectionobj.imagecollection[0];
		let collectiongrid = [];
		for (let key in scollectionimages) {
			if (scollectionimages.hasOwnProperty(key)) {
				let obj = scollectionimages[key];
				collectiongrid.push(<SingleCollectionGrid key={obj.id} name={obj.name} image={obj.imglink} url={obj.url} category={obj.category} price={obj.price} brand={obj.brand}/>);
			}
		}
		return (
			<div>
			<section className="sep-bottom-2x">
        <div className="container">
          <div className="row">
            <div className="col-md-8 sep-top-md">
						<div className="row">
						{collectiongrid}
						</div>
            </div>
            <div className="col-md-4 sep-top-md">
              <dl className="metadata">
                <dt>Collection</dt>
                <dd>{scollectionobj.collectionid}</dd>
                <dt>Total collection cost</dt>
                <dd>${scollectionobj.collectioncost}</dd>
                <dt>Created on</dt>
                <dd>{newdate.toDateString()}</dd>
              </dl>
              <ul className="social-icon sep-top-md">
              <li><a className="cursorp" onClick={this._increaseLike}><i className="fa fa-heart fa-lg"></i>&nbsp;{scollectionobj.likes}</a></li>
              <li><a className="cursorp"><i className="fa fa-facebook fa-lg"></i>&nbsp; 150</a></li>
              <li><a className="cursorp"><i className="fa fa-twitter fa-lg"></i>&nbsp; 150</a></li>
              <li><a className="cursorp"><i className="fa fa-pinterest fa-lg"></i>&nbsp; 150</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <PreFooter/>
      </div>
		);
	}

	_increaseLike = () => {
		CollectionsActions.increment(this.props.params.collectionId);
	}
}

SingleCollection.propTypes = {
	CollectionsStore: React.PropTypes.object,
	params: React.PropTypes.object
};
