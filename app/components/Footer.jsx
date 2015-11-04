import React from 'react';
import { Link } from 'react-router';

export default class Footer extends React.Component {
	render() {
		return (
			<footer id="footer">
        <div className="inner sep-top-xs sep-bottom-xs">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
              <small><Link to="/">Home</Link></small>
              <small><Link to="/about">About</Link></small>
              <small><Link to="/collections">Collections</Link></small>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center sep-top-xs">&copy; Copyright Preview 2015.</div>
            </div>
          </div>
        </div>
      </footer>
		);
	}
}
