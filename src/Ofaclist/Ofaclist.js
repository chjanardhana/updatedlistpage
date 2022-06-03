import React, { useState, Component } from 'react';
import { Table } from 'antd';
import PrimaryHeader from '../Header';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';


const columns = [
  {
    title: 'Country',
    dataIndex: 'country',
  },
  {
    title: 'Updated Date',
    dataIndex: 'date',
  },
];
const ofcListData = [];
for (let i = 0; i < 6; i++) {
  ofcListData.push({
    key: i,
    country: 'North Korea',
    date: '05/03/2022',
  });
};

const Ofaclist = () => {
  // const { newEntryForm } = props;
  const [selectedValue, setSelectedValue] = useState({
    id: 5,
    label: 'OFAC Lists',
    value: 'ofac',
  });
  const navigate = useNavigate();

const handleOnChange = (e) => {
  // const { value } = target;
  setSelectedValue(e);
  navigate(`/fraudnet-ui/list/${e?e.value:""}`, { replace: true });
};

// const newEntryForm = () => {
//   console.log('callllll');
//   setModalForm(!pegModalForm);
// };
// const advanceSearch = () => {
//   setAdvSearchModal(!searchModal);
// };

  return (
    <>
      <PrimaryHeader 
       handleOnChange={handleOnChange}
       currentSelectValue={selectedValue}
      //  search={advanceSearch}
      //  entryForm={newEntryForm}
       />
      <Table
        style={{ padding: '2rem' }}
        columns={columns}
        dataSource={ofcListData}
      />
    </>
  );
};
export default Ofaclist;
