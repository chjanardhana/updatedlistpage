import React from 'react';
import { Table } from 'antd';

export const CustomTable = (props) => {
  const { rowSelection, columns, data } = props;
  return (
    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
  );
};
