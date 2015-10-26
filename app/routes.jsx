import React from 'react';
import Route from 'react-router';

import App from 'components/App';
import About from 'components/About';
import Dashboard from 'components/Dashboard';
import Change from 'components/Change';
import Collection from 'components/change/Collection';
import SingleCollection from 'components/change/SingleCollection';

export default (
  <Route component={App}>
  	<NotFoundRoute handler={NotFound}/>
    <Route path="/" component={Change} />    
    <Route path="about" component={About} />
    <Route path="collections" component={Collection} />
    <Route path="collection/:collectionId" component={SingleCollection} />
  </Route>
);
