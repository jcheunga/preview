import React from 'react';
import { Input, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import ItemActions from 'actions/ItemActions';
import isurl from 'utils/isurl';
import styles from 'scss/components/_singleimage';
const ENTER_KEY_CODE = 13;

export default class TopTextInput extends React.Component {

	constructor() {
		super();
		this.state = {
			urlerror: '',
			inputval: ''
		};
	}

	componentDidMount = () => {
		this.refs.enterUrl.getInputDOMNode().focus();
	}

	/*eslint-disable */
	inputbsStyle() {
		if (this.state.urlerror === '') {
			return; // Make better
		} else if (!this.state.urlerror) {
			return "error";
		} else if (this.state.urlerror) {
			return "success";
		}
	}
	/*
	clearInput = () => {
		this.setState({inputval: ''}, function() {
			this.refs.enterUrl.getInputDOMNode().focus();
			this.setState({urlerror: ''});
		});
	}
	*/
	/*eslint-enable */

	handleUrlChange = (e) => {
		this.setState({inputval: e.target.value});
	}

	_submitData = () => {
		let preurl = this.refs.enterUrl.getValue();
		let testurl = isurl.urlcheck(preurl);
		if (!testurl) {
			this.setState({urlerror: false});
		} else {
			this.setState({urlerror: true, inputval: ''});
			let data = {
				url: this.refs.enterUrl.getValue(),
				category: this.refs.categorySelect.getValue()
			};
			ItemActions.create(data);
		}
	}

	_onKeyDown = (event) => {
		if (event.keyCode === ENTER_KEY_CODE) {
			this._submitData();
		}
	}

	_onCategoryChange = (event) => {
		ItemActions.category(event.target.value);
	}

	render() {
		let errormessage;
		if (this.state.urlerror === '' || this.state.urlerror) {
			errormessage = null;
		} else if (!this.state.urlerror) {
			errormessage = <div className="sep-bottom-xs">Please enter a valid URL (http://...)</div>;
		}

		const getImageButton = (<Button bsStyle="primary" onClick={this._submitData}>Get Image</Button>);
		const categoryDropdown = (
			<div className={styles.urloptions}>
			<Input type="select" onChange={this._onCategoryChange} ref="categorySelect">
				<option value="Head">Head</option>
				<option value="Neck">Neck</option>
				<option value="Top">Top</option>
				<option value="Hands">Hands</option>
				<option value="Bottom">Bottom</option>
				<option value="Feet">Feet</option>
				<option value="Accessory">Accessory</option>
				<option value="Other">Other</option>
			</Input>
			</div>);

		return (
			<div>
			{categoryDropdown}
			<div className={styles.urlinput}>
			<Input type="text" placeholder="Enter URL for product" value={this.state.inputval} onChange={this.handleUrlChange} onKeyDown={this._onKeyDown} ref="enterUrl" bsStyle={this.inputbsStyle()} buttonAfter={getImageButton}/>
			</div>
			
			{errormessage}
			</div>
		);
	}
}

TopTextInput.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func
};
