import Immutable from 'immutable';
import CollectionsActions from 'actions/CollectionsActions';
import { fromJSOrdered } from 'utils/immutableHelpers';
import alt from 'altInstance';

class CollectionsStore {
	constructor() {
		this.allCollections = Immutable.OrderedMap({});

		this.on('init', this.bootstrap);
		this.on('bootstrap', this.bootstrap);

		this.bindListeners({
			handleFilter: CollectionsActions.FILTER,
			handleIncrement: CollectionsActions.INCREMENT,
			handleCreate: CollectionsActions.CREATE
		});
	}

	bootstrap() {
		if (!Immutable.OrderedMap.isOrderedMap(this.allCollections)) {
      this.allCollections = fromJSOrdered(this.allCollections);
    }
	}

	handleFilter() {
	}

	handleCreate() {
	}

	handleIncrement(collectionid) {
    const collection = this.allCollections.get(collectionid);
    const likes = collection.get('likes');
    this.allCollections = this.allCollections.set(collectionid, collection.set('likes', likes + 1));
    this.emitChange();
  }
}

export default alt.createStore(CollectionsStore, 'CollectionsStore');
