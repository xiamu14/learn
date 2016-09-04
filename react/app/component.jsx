'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var count = 0;
var img = require('./src/test.jpg');
var CommentBox = React.createClass({
    getDefaultProps: function(){
        console.log('1');
        return {name: 'Tom'};
    },
    getInitialState: function(){
        console.log('initialState :' + this.props);
        return {mycount: count++, ready: false};
    },
    componentWillMount: function(){
        console.log('wollmount: 3');
        this.setState({ready: true});
    },
    render: function() {
        console.log('render 4');
        return (
            <div className='commentBox'>
            Hello, world! I'm {this.props.name} .
            <p>{this.state.ready}</p>
            <img src={img} alt='test'/>
            </div>
        );
    },
    componentDidMount: function(){
        console.log('4');
        $(ReactDOM.findDOMNode(this)).append('surprise');
    }
});

module.exports = CommentBox;
