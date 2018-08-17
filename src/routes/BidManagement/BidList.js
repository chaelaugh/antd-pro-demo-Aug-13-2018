import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import StepsCom from './StepsCom';
@connect()
export default class BidList extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <div style={{ padding: 20 }}>
          <StepsCom />
        </div>
      </Fragment>
    );
  }
}
