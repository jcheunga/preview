import React from 'react';

export default class HomeInitial extends React.Component {
	render() {
		return (
      <div className="bg-primary">
        <div className="row">
          <div className="col-md-4 text-center sep-top-md sep-bottom-md">
              <h5>Step 1</h5>
              <i className="fa fa-eye homeicon"></i>
              <p>Copy the URL of a product and input the CATEGORY and URL above.</p>
              <p>Currently works with Amazon and Backcountry</p>
          </div>
          <div className="col-md-4 text-center sep-top-md sep-bottom-md">
              <h5>Step 2</h5>
              <i className="fa fa-puzzle-piece homeicon"></i>
              <p>Add more products to compare or match to complete the collection.</p>
          </div>
          <div className="col-md-4 text-center sep-top-md sep-bottom-md">
              <h5>Step 3</h5>
              <i className="fa fa-share homeicon"></i>
              <p>SAVE and SHARE the COLLECTION with other people.</p>
          </div>
        </div>
      </div>
		);
	}
}
