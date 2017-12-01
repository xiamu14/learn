import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';
import { Layout } from 'antd';
import { Breadcrumb, Icon } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <Icon type="user" />
            <span>Application List</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Application
          </Breadcrumb.Item>
        </Breadcrumb>
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
