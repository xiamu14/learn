var React = require('react');
import { findDOMNode } from 'react-dom';
import styles from '../css/main.css';

var img = document.createElement('img');

module.exports = React.createClass({
	submitHandler: function(event){
		event.preventDefault();
		// 通过 ref 访问输入框
		var helloTo = findDOMNode(this.refs.helloTo).value;
		// console.log(this);
		console.log(helloTo);
	},
    render: function(){
        return (
        	<form onSubmit={this.submitHandler}>
        		<input ref="helloTo" type="text" defaultValue="Hello world!" />
        		<br/>
        		<button type="submit">speak</button>
        	</form>
        )
    }
});
