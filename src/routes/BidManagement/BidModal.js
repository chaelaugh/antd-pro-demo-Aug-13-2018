import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Modal, Input } from 'antd';

@connect()
export default class BidModal extends Component {
  state = {
    value: '',
  };

  componentWillMount() {
    const { value } = this.props;
    this.setState({
      value,
    })
  }

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      value,
    })
  }

  handleOk = () => {
    const { value } = this.state;
    const { onOk } = this.props;
    onOk(value)
    this.setState({
      value: '',
    })
  }

  handleCancel = () => {
    const { onCancel } = this.props;
    this.setState({
      value: '',
    })
    onCancel()
  }

  render() {
    const { visible } = this.props;
    return (
      <Fragment>
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input onBlur={this.onChange} />
        </Modal>
      </Fragment>
    );
  }
}
