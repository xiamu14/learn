/*
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
*/

// 2017/2/23 开始写新的东西
// 
let React = require('react');
class Button extends React.Component {
    static propTypes = {
        type: PropTypes.oneOf(['success', 'normal']),
        onClick: PropTypes.func,
    };
    static defaultProps = {
        type: 'normal',
    };
    handleClick() {
    }

    render() {
        let { className, type, children, ...other} = this.props;
        const classes = className(classNam, 'prefix-button', 'prefix-button-'+type);
        return (
            <span className={classes}{...other} onClick={::this.handleClick}>
                {children}
            </span>
            );
    }
}