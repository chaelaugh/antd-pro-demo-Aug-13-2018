import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Modal, Input, Button } from 'antd';

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

  render() {
    const { visible, value } = this.state;
    return (
      <Fragment>
        <Button onClick={this.onShow}>Click</Button>
        <div style={{ padding: 20 }}>
          <Input value={value} />
        </div>
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.onCancel}
          footer={null}
        >
          <Input onBlur={this.onChange} />
        </Modal>
      </Fragment>
    );
  }
}
