import Immutable from 'immutable';
import ItemActions from 'actions/ItemActions';
import { fromJSOrdered } from 'utils/immutableHelpers';
import alt from 'altInstance';

class ItemStore {
	constructor() {
		this.newCollection = Immutable.OrderedMap({});
		this.highlightedItem = Immutable.OrderedMap({});
		this.tempItem = Immutable.OrderedMap({});
		this.savedCollection = {};
		this.collectionCost = 0;

		this.on('init', this.bootstrap);
		this.on('bootstrap', this.bootstrap);

		this.bindListeners({
			handleCreate: ItemActions.CREATE,
			handleTyping: ItemActions.TYPING,
			// handleCategory: ItemActions.CATEGORY,
			handleRemove: ItemActions.REMOVEONE,
			handleHighlight: ItemActions.HIGHLIGHT,
			handleShare: ItemActions.SHARE
		});
	}

	bootstrap() {
		if (!Immutable.OrderedMap.isOrderedMap(this.newCollection)) {
			this.newCollection = fromJSOrdered(this.newCollection);
		}

		if (!Immutable.OrderedMap.isOrderedMap(this.highlightedItem)) {
			this.highlightedItem = fromJSOrdered(this.highlightedItem);
		}

		if (!Immutable.OrderedMap.isOrderedMap(this.tempItem)) {
			this.tempItem = fromJSOrdered(this.tempItem);
		}

		this.savedCollection = {};
		this.collectionCost = 0;
	}

	handleCreate(data) {
		const id = data.id;
		const hdata = {
			id: id
		};
		const pricevalue = data.price;
		// this.topics = this.topics.set(id, Immutable.fromJS(data));
		this.highlightedItem = this.highlightedItem.clear();
		this.highlightedItem = this.highlightedItem.set(id, Immutable.fromJS(hdata));
		this.newCollection = this.newCollection.set(id, Immutable.fromJS(data));
		this.collectionCost = this.collectionCost + pricevalue;
		this.emitChange();
	}

	handleTyping() {
		this.emitChange();
	}

	/*handleCategory(category) {
		this.newCategory = category;
		this.emitChange();
	}*/

	handleRemove(id) {
		const collectionremove = this.newCollection.get(id);
		const removevalue = collectionremove.get('price');
		this.collectionCost = this.collectionCost - removevalue;
		this.newCollection = this.newCollection.delete(id);
		this.highlightedItem = this.highlightedItem.delete(id);
		if (this.newCollection.size > 0) {
			this.tempItem = this.tempItem.clear();
			this.tempItem = this.newCollection.take(1);
			let tempItemtoArray = this.tempItem.toArray();
			let tempItemId = tempItemtoArray[0].get('id');
			const tempdata = {
				id: tempItemId
			};
			this.highlightedItem = this.highlightedItem.clear();
			this.highlightedItem = this.highlightedItem.merge(this.tempItem);
		} else if (this.newCollection.size === 0) {
			delete this.savedCollection.url;
			this.collectionCost = 0;
		}
		this.emitChange(); // might need to refactor into if statement to work
	}

	handleHighlight(id) {
		// console.log(this.highlightedItem);
		const tdata = {
			id: id
		};
		this.highlightedItem = this.highlightedItem.clear();
		this.highlightedItem = this.highlightedItem.set(id, Immutable.fromJS(tdata));
    // const topic = this.highlightedItem.get(id);
    // const count = topic.get('id');
		this.emitChange();
	}

	handleShare(collectionid) {
		const partialurl = 'http://localhost:3000/collection/';
		const collectionurl = partialurl + collectionid;
		delete this.savedCollection.url;
		this.savedCollection.url = collectionurl;
		this.emitChange();
	}

}

export default alt.createStore(ItemStore, 'ItemStore');
