import React from 'react';
import { MinusCircleOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space, Select, Typography } from 'antd';

const { Option } = Select;
const { Text } = Typography;

const onFinish = (values) => {
  console.log('Received values of form:', values);
};

const ServicesTable = () => (
  <Form
    name="dynamic_form_nest_item"
    onFinish={onFinish}
    autoComplete="off"
    style={{
      width: '100%',
      marginTop: 20,
    }}
  >
    <div style={{ overflowX: 'auto' }}> {/* To enable horizontal scrolling */}
      <Space
        style={{
          display: 'flex',
          alignItems: 'baseline',
          marginBottom: 8,
          marginLeft: 25,
        }}
        align="baseline"
      >
        <Text strong style={{ color: 'white', minWidth: 150, marginLeft: 20, }}>Services</Text>
        <Text strong style={{ color: 'white', minWidth: 150, marginLeft: 135, }}>Unit Price</Text>
        <Text strong style={{ color: 'white', minWidth: 150, marginLeft: 130, }}>Quantity</Text>
        <Text strong style={{ color: 'white', minWidth: 150, marginLeft: 140, }}>Currency</Text>
        <Text strong style={{ color: 'white', minWidth: 80, marginLeft: 35, }}>R.O.E</Text>
        <Text strong style={{ color: 'white', minWidth: 150, marginLeft: 160, }}>Total</Text>
        <Text strong style={{ color: 'white', minWidth: 150, marginLeft: 140, }}>Action</Text>
      </Space>
    </div>
    <Form.List name="users">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space
              key={key}
              style={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'space-evenly',
                marginLeft: 25,
              }}
              align="baseline"
            >
              <Form.Item
                {...restField}
                name={[name, 'services']}
                style={{ minWidth: 150 }}
              >
                <Input placeholder="Add Services" />
              </Form.Item>
              <Form.Item
                 {...restField}
                 name={[name, 'uprice']}
               >
                 <Input placeholder="Unit Price" />
               </Form.Item>
               <Form.Item
                 {...restField}
                 name={[name, 'quantity']}
               >
                 <Input placeholder="Quantity" />
               </Form.Item>
               <Form.Item
                 {...restField}
                 name={[name, 'selection']}
                 rules={[
                   {
                     required: true,
                     message: 'Missing selection',
                   },
                 ]}
               >
                 <Select placeholder="Select">
                   <Option value="USD">USD</Option>
                   <Option value="GBP">GBP</Option>
                   <Option value="PKR">PKR</Option>
                 </Select>
               </Form.Item>
               <Form.Item
                 {...restField}
                 name={[name, 'roe']}
               >
                 <Input placeholder="R.O.E" />
               </Form.Item>
               <Form.Item
                 {...restField}
                 name={[name, 'total']}
               >
                 <Input placeholder="Total" />
               </Form.Item>
              <DeleteOutlined onClick={() => remove(name)} style={{ fontSize: 16, color: 'white' }} />
            </Space>
          ))}
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusOutlined />}
              style={{ width: 180, marginLeft: 20 }}
            >
              Add Services
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  </Form>
);

export default ServicesTable;

