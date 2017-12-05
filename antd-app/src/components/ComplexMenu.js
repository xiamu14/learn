import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class ComplexMenu extends Component {
  handleClick = (e) => {
    console.log('click ', e);
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
        <SubMenu key="sub1" title={<span><Icon type="user" /><span>用户管理</span></span>}>
          <Menu.Item key="1">帐号管理</Menu.Item>
          <Menu.Item key="2">用户详情</Menu.Item>
        </SubMenu>
        <Menu.Item><span><Icon type="rocket" /></span>爬虫管理</Menu.Item>
        <SubMenu key="sub4" title={<span><Icon type="line-chart" /><span>用户数据</span></span>}>
          <Menu.Item key="9">注册渠道统计</Menu.Item>
          <Menu.Item key="10">新增注册统计</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default ComplexMenu;
