import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Table, Button } from 'antd';
import { routerRedux } from 'dva/router';
import ButtonArea from '../common/ButtonArea';

@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))
export default class BidList extends Component {
  state = {};

  onAdd = () => {
    const { dispatch } = this.props;
    dispatch(routerRedux.push('/bidManagement/bidInfo'));
  };

  render() {
    const list = [];
    const columns = [
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '编号',
        dataIndex: 'mount',
        key: 'mount',
      },
      {
        title: '金额',
        dataIndex: 'r6ate',
        key: 'ra6te',
      },
      {
        title: '利率',
        dataIndex: 'ti5me',
        key: 'tim5e',
      },
      {
        title: '借款人',
        dataIndex: 't4ime',
        key: 'ti4me',
      },
      {
        title: '还款方式',
        dataIndex: 'ti3me',
        key: 'time3',
      },
      {
        title: '创建人',
        dataIndex: 'time2',
        key: 'time2',
      },
      {
        title: '提交时间',
        dataIndex: 'time1',
        key: 'time1',
      },
    ];
    return (
      <Fragment>
        <div style={{ padding: 20 }}>
          <ButtonArea>
            <Button type="primary" onClick={this.onAdd}>
              新建
            </Button>
          </ButtonArea>
          <Table dataSource={list} columns={columns} pagination={false} bordered />
        </div>
      </Fragment>
    );
  }
}
