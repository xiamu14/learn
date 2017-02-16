var React = require('react');

import styles from '../css/main.css';

module.exports = React.createClass({
    render: function(){
        return (
        	<div className={styles.box}>
            	<h1>Hello world!</h1>
            	<p>你好吗！</p>
            </div>
        )
    }
});
