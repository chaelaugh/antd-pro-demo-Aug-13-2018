import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Input, Button } from 'antd';
import BidModal from './BidModal';

@connect()
export default class BidList extends Component {
  state = {
    visible: false,
    value: '',
  };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      value,
    })
  }

  onShow = () => {
    this.setState({
      visible: true,
    })
  }

  onCancel = () => {
    this.setState({
      visible: false,
    })
  }

  onOk = (value) => {
    this.setState({
      visible: false,
      value,
    })
  }

  render() {
    const { visible, value } = this.state;
    const modalProps = {
      visible,
      value,
      onOk: this.onOk,
      onCancel: this.onCancel,
    }
    return (
      <Fragment>
        <Button onClick={this.onShow}>Click</Button>
        <div style={{ padding: 20 }}>
          <Input value={value} />
        </div>
        <BidModal {...modalProps} />
      </Fragment>
    );
  }
}
