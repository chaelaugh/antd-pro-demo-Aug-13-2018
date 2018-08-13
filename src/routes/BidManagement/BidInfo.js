import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import {
  Form,
  Row,
  Col,
  Input,
  Select,
  Upload,
  Button,
  Icon,
  DatePicker,
  InputNumber,
  AutoComplete,
} from 'antd';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
@Form.create()
@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))
export default class BidInfo extends Component {
  state = {
    imageUrl: '',
    item: {},
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const { imageUrl, item } = this.state;
    const formItemLayout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const bidTypeList = [
      { id: 1, name: '类型1' },
      { id: 2, name: '类型2' },
      { id: 3, name: '类型3' },
      { id: 4, name: '类型4' },
    ];
    const dataSource = ['蔡晓冲18529465004', '刘德华17529465004', '张学友16529465004'];
    return (
      <Fragment>
        <div style={{ padding: 20 }}>
          <div style={{ fontSize: 18 }}>新建标的</div>
          <Form style={{ padding: 10 }}>
            <Row gutter={24}>
              <Col span={8}>
                <Form.Item label="图标" {...formItemLayout}>
                  {getFieldDecorator('no')(
                    <Upload
                      name="avatar"
                      showUploadList={false}
                      action="//jsonplaceholder.typicode.com/posts/"
                      onChange={this.handleChange}
                    >
                      {imageUrl || item.img ? (
                        <img src={imageUrl || item.img} alt="" />
                      ) : (
                        <Button>
                          <Icon type="upload" /> Upload
                        </Button>
                      )}
                    </Upload>
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="标的类型" {...formItemLayout}>
                  {getFieldDecorator('sbtatu1s', {
                    initialValue: 1,
                  })(
                    <Select placeholder="请选择">
                      {bidTypeList.map(item1 => {
                        return (
                          <Option key={item1.id} value={item1.id}>
                            {item1.name}
                          </Option>
                        );
                      })}
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="编号" {...formItemLayout}>
                  {getFieldDecorator('1status')(<Input placeholder="DZ-20180803" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8}>
                <Form.Item label="借款人" {...formItemLayout}>
                  <AutoComplete
                    style={{ width: 200 }}
                    dataSource={dataSource}
                    placeholder="搜索"
                    filterOption={(inputValue, option) =>
                      option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="借款期限" {...formItemLayout}>
                  {getFieldDecorator('s4tatu1s', {
                    initialValue: 1,
                  })(
                    <Select placeholder="请选择">
                      {bidTypeList.map(item1 => {
                        return (
                          <Option key={item1.id} value={item1.id}>
                            {item1.name}
                          </Option>
                        );
                      })}
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="借款金额" {...formItemLayout}>
                  {getFieldDecorator('s1tatus')(<Input placeholder="10000" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item label="竞标时间" {...formItemLayout}>
                  {getFieldDecorator('n2o')(<RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item label="年化收益率" {...formItemLayout}>
                  {getFieldDecorator('sta4tu1s', {
                    initialValue: 1,
                  })(
                    <InputNumber
                      defaultValue={100}
                      min={0}
                      max={100}
                      formatter={value => `${value}%`}
                      parser={value => value.replace('%', '')}
                    />
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="佣金比率" {...formItemLayout}>
                  {getFieldDecorator('stat3us')(
                    <InputNumber
                      defaultValue={100}
                      min={0}
                      max={100}
                      formatter={value => `${value}%`}
                      parser={value => value.replace('%', '')}
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item label="合同选择" {...formItemLayout}>
                  {getFieldDecorator('n1o')(
                    <Select placeholder="请选择">
                      {bidTypeList.map(item1 => {
                        return (
                          <Option key={item1.id} value={item1.id}>
                            {item1.name}
                          </Option>
                        );
                      })}
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item label="风险控制">
                  {getFieldDecorator('n1o')(<TextArea rows={4} />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item label="项目简介">
                  {getFieldDecorator('3n1o')(<TextArea rows={12} />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="primary">确认</Button>
            <Button style={{ marginLeft: 10 }}>取消</Button>
          </div>
        </div>
      </Fragment>
    );
  }
}
