import alt from 'altInstance';
import ItemWebAPIUtils from 'utils/ItemWebAPIUtils';

class ItemActions {

	create(data) {
		const id = Date.now() + Math.floor(Math.random() * 1000).toString();
		const finaldata = {
			id: id,
			url: data.url,
			category: data.category
		};

		let self = this;

		ItemWebAPIUtils.addItem(finaldata)
			.done( function success(res) {
				self.dispatch(res);
			})
			.fail( function failure() {

			});
	}

	typing(text) {
		this.dispatch(text);
	}

	category(category) {
		this.dispatch(category);
	}

	removeone(id) {
		this.dispatch(id);
	}

	highlight(id) {
		this.dispatch(id);
	}

	share(collection) {
		const colid = Date.now() + Math.floor(Math.random() * 1000).toString();
		const sharedata = {
			collectionid: colid,
			imagecollection: collection.collection,
			likes: 0,
			collectioncost: collection.collectioncost
		};
		let self = this;
		// this.dispatch(sharedata);
		ItemWebAPIUtils.addCollection(sharedata)
			.done( function success(res) {
				self.dispatch(res);
			})
			.fail( function failure() {

			});
	}
}

export default alt.createActions(ItemActions);
