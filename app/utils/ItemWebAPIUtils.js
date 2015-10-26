import $ from 'jquery';

/*
 * Following code reuse and dependencies guidelines from:
 * https://github.com/bendc/frontend-guidelines#dependencies
 */
const propIsEnumerable = Object.prototype.propertyIsEnumerable;

const toObject = (val) => {
  if (val == null) {
    throw new TypeError('Object assign cannot be called with null or undefined');
  }

  return Object(val);
};

const ownEnumerableKeys = (obj) => {
  let keys = Object.getOwnPropertyNames(obj);

  if (Object.getOwnPropertySymbols) {
    keys = keys.concat(Object.getOwnPropertySymbols(obj));
  }

  return keys.filter((key) => {
    return propIsEnumerable.call(obj, key);
  });
};

const assign = (() =>
  Object.assign ? Object.assign : (target, ...sources) => {
    let keys;
    let to = toObject(target);
    sources.forEach((val) => {
      keys = ownEnumerableKeys(Object(val));
      keys.forEach((key) => {
        to[key] = val[key];
      });
    });
    return to;
  }
)();

const merge = (...sources) => assign({}, ...sources);

const utils = {

	addItem: (item) => {
		return $.ajax({
			url: '/item',
      data: JSON.stringify(item),
      type: 'POST',
      contentType: 'application/json'
		});
	},

	addCollection: (collection) => {
		return $.ajax({
			url: '/imagecollection',
			data: JSON.stringify(collection),
			type: 'POST',
			contentType: 'application/json'
		});
	},

	updateLikes: (collection, isFull, isIncrement) => {
    let data = merge(collection, {
      isFull: isFull,
      isIncrement: isIncrement
    });
    return $.ajax({
      url: '/imagecollection',
      data: JSON.stringify(data),
      type: 'PUT',
      contentType: 'application/json'
    });
  }
};

export default utils;

