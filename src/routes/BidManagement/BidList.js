import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Table, Button, Modal, notification } from 'antd';
import ButtonArea from '../common/ButtonArea';

const { confirm } = Modal;

@connect()
export default class BidList extends Component {
  state = {
    ids: [],
  };

  onApproval = (state) => {
    const { ids } = this.state; 
    const id = ids
    const { busiType = '', dispatch } = this.props; // 这个是没有的 假的 
    let busi_type = busiType; // eslint-disable-line
    if (ids.length > 0) {
      const data = { id, state, busi_type}
      dispatch({ type: 'demo/onApproval', payload: { data } })
    } else {
      notification.error({
        message: 'Notification Title',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    }
  }

  setList = (list) => { 
    this.setState({
      ids: list,
    })
  }

  showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure delete this task?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }



  render() {
    const list = [
      { id: 1, name: '刘德华' },
      { id: 2, name: '周星驰' },
      { id: 3, name: '马化腾' },
    ];
    const columns = [
      {
        title: 'name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'phone',
        dataIndex: 'phone',
        key: 'phone',
      },
    ];

    const rowSelection = {
      onChange: (selectedRowKeys) => {
        this.setList(selectedRowKeys)
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };

    return (
      <Fragment>
        <div style={{ padding: 20 }}>
          <ButtonArea>
            <Button type="primary" onClick={() => this.onApproval(3)}>
              同意
            </Button>
            <Button type="danger" style={{ marginLeft: 10 }} onClick={() => this.onApproval(4)}>
              拒绝
            </Button>
          </ButtonArea>
          <Table rowSelection={rowSelection} dataSource={list} columns={columns} pagination={false} bordered />
        </div>
      </Fragment>
    );
  }
}
