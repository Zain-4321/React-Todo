import React from 'react';
import { Input, Space } from 'antd';
const { Search } = Input;

// const onSearch = (value, _e, info) => console.log(info?.source, value);
const Inp = () => (
  <Space direction="vertical">
    <Search
      placeholder="input search text"
      allowClear
      // enterButton="Search"
      size="large"
      // onSearch={onSearch}
      style={{width: "500px"}}
    />
  </Space>
);
export default Inp;