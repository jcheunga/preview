import React from 'react';
import { Route } from 'react-router';

import App from 'components/App';
import About from 'components/About';
import Change from 'components/Change';
import Collection from 'components/change/Collection';
import SingleCollection from 'components/change/SingleCollection';
import NotFound from 'components/NotFound';

export default (
	<Route component={App}>
		<Route path="/" component={Change} />
		<Route path="about" component={About} />
		<Route path="collections" component={Collection} />
		<Route path="collection/:collectionId" component={SingleCollection} />
		<Route path="*" component={NotFound}/>
	</Route>
);
