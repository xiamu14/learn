import React, { Component } from 'react';
import './App.css';
import { Layout, Icon } from 'antd';

// import component
import ComplexMenu from './components/ComplexMenu';
import UserTable from './components/UserTable';

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <ComplexMenu></ComplexMenu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff' }} >
            <h1>百姓红包</h1>
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 623 }}>
              <UserTable/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
