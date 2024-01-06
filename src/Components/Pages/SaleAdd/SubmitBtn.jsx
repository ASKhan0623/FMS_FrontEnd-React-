import axios from 'axios';
import React from 'react';
import { Button, Flex } from 'antd';
import '../../Pages/PageComponent.css'

const SubmitBtn = ({htmlType}) => (
  
  <Flex gap="small" wrap="wrap">
     <Button type="primary" className='SubmitBtn' htmlType={htmlType}>Submit</Button>
  </Flex>

);
export default SubmitBtn;