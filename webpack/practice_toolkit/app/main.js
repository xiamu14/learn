var React = require('react');
var ReactDom = require('react-dom');
var AppComponent = require('./AppComponent.js');

import '../css/main.css';

ReactDom.render(<AppComponent/>, document.getElementById('container'));
