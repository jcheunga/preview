import React from 'react';
import { Link } from 'react-router';

import styles from 'scss/components/_singleimage';

export default class Navigation extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-standard opaque" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/"><img className={styles.logoimg} src="/assets/logo.png" alt="Preview"/></Link>
          </div>
          <div>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/">Home</Link></li>                
              <li><Link to="/collections">Collections</Link></li>
              <li><Link to="/about">About</Link></li>             
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}

Navigation.propTypes = { UserStore: React.PropTypes.object };
