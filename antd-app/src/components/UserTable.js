import React, { Component } from 'react';
import { Table, Button } from 'antd';

const columns = [{
  title: 'ID',
  dataIndex: 'id',
  key: 'id',
  render: text => <a href="#">{text}</a>,
}, {
  title: '昵称',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '手机号码',
  dataIndex: 'telephone',
  key: 'telephone',
  }, {
    title: '地区',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '注册时间',
    dataIndex: 'logindate',
    key: 'logindate',
  }, {
    title: '状态',
    dataIndex: 'state',
    key: 'state',
  }, {
  title: '操作',
  key: 'action',
  render: (text, record) => (
    <Button type="primary">编辑</Button>
  ),
}];

const data = [{
  key: '1',
  id: 10000,
  telephone: 13423456745,
  name: 'Jane',
  age: 32,
  address: '深圳市',
  logindate: '2017-03-30 15:32:00',
  state: '禁言'
}, {
  key: '2',
  id: 10001,
  telephone: 13423456745,
  name: 'Jim Green',
  age: 42,
  address: '上海市',
  logindate: '2017-03-30 15:32:00',
  state: '封号'
}, {
  key: '3',
  id: 10002,
  telephone: 13423456745,
  name: 'Joe Black',
  age: 32,
  address: '北京市',
  logindate: '2017-03-30 15:32:00',
  state: '正常'
}];

class UserTable extends Component {
  render() {
    return (
      <Table columns={columns} dataSource={data} bordered/>
    );
  }
}

export default UserTable;
