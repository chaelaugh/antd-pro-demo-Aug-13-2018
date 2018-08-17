import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Steps } from 'antd';

const { Step } = Steps;

@connect()
export default class StepsCom extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <div>
          <Steps current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps>
        </div>
      </Fragment>
    );
  }
}
