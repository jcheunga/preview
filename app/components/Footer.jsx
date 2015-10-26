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
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/collections">Collections</Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center sep-top-xs"><small>&copy; Copyright Preview 2015.</small></div>
            </div>
          </div>
        </div>
      </footer>
		);
	}
}
