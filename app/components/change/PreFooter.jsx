import React from 'react';
import { Link } from 'react-router';
 
export default class PreFooter extends React.Component {
	render() {
		return (
			<section className="call-to-action bg-primary sep-top-md sep-bottom-md">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <h5 className="action-title upper light">HAVE AN IDEA FOR AN OUTFIT?</h5>
            </div>
            <div className="col-md-3 text-right"><Link to="/" className="btn btn-light btn-bordered btn-lg">Make a Collection</Link></div>
          </div>
        </div>
      </section>
		);
	}
}
