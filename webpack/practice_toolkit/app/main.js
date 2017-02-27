// var React = require('react');
// var ReactDom = require('react-dom');
// var AppComponent = require('./AppComponent.js');

// ReactDom.render(<AppComponent className ="klsjdf"name="John"/>, document.getElementById('container'));

import React from 'react'
import ReactDom from 'react-dom'
import {Router, Route, Link} from 'react-router'
import {hashHistory} from 'react-router' // 一定要加 history

const App = React.createClass({render() {return (<div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

const About = React.createClass({render() {return <h3>About</h3>
  }
})

const Inbox = React.createClass({render() {return (<div>
        <h2>Inbox</h2>
        {this.props.children ||"Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = React.createClass({render() {return <h3>Message {this.props.params.id}</h3>
  }
})

ReactDom.render((<Router history={hashHistory}>
    <Route path="/"component={App}>
      <Route path="about"component={About} />
      <Route path="inbox"component={Inbox}>
        <Route path="messages/:id"component={Message} />
      </Route>
    </Route>
  </Router>
), document.getElementById('container'))