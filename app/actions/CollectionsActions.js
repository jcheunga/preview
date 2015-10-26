import alt from 'altInstance';
import ItemWebAPIUtils from 'utils/ItemWebAPIUtils';

class CollectionsActions {
	filter() {
	}

	increment(id) {
		this.dispatch(id);
		ItemWebAPIUtils.updateLikes({ collectionid: id }, false, true);
	}

	create() {

	}
}

export default alt.createActions(CollectionsActions);
