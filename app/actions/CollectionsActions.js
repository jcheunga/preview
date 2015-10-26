import alt from 'altInstance';
import ItemWebAPIUtils from 'utils/ItemWebAPIUtils';

class CollectionsActions {
	filter(data) {
	}

	increment(id) {
		this.dispatch(id);
		ItemWebAPIUtils.updateLikes({ collectionid: id }, false, true);
	}

	create(data) {
		
	}
}

export default alt.createActions(CollectionsActions);
