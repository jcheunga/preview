import React from 'react';
import Helmet from 'react-helmet';

import config from 'helmconfig.js';

class Header extends React.Component {
  render() {
    return (
      <Helmet
        title="Preview | Create and share collections"
        meta={config.meta}
        link={config.link}
      />
    );
  }
}

React.renderToString(<Header />);
let header = Helmet.rewind();

export default header;
