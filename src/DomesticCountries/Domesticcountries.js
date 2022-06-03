import React, { useState, Component } from 'react';
import PrimaryHeader from '../Header';
import { Table } from 'antd';
import {useNavigate} from 'react-router-dom';


const columns = [
  {
    title: 'Country',
    dataIndex: 'country',
  },
  {
    title: 'Model',
    dataIndex: 'model',
  },
  {
    title: 'Comments',
    dataIndex: 'comments',
  },
  {
    title: 'Updated Date',
    dataIndex: 'date',
  },
];
const dcListData = [];
for (let i = 0; i < 6; i++) {
  dcListData.push({
    key: i,
    country: 'india',
    model: '12343',
    comments: 'Hello World',
    date: '05/03/2022',
  });
}
const DCListComponent = () => {
  const [searchModal, setAdvSearchModal] = useState(false);
  const [pegModalForm, setModalForm] = useState(false);
  const [selectedValue, setSelectedValue] = useState({  id: 6,
    label: "Domestic Countries",
    value: "domestic-countries",});
  const navigate = useNavigate();
  const newEntryForm = () => {
    console.log('callllll');
    setModalForm(!pegModalForm);
  };
  const advanceSearch = () => {
    setAdvSearchModal(!searchModal);
  };
  const handleOnChange = (e) => {
    // const { value } = target;
    setSelectedValue(e);
    navigate(`/fraudnet-ui/list/${e?e.value:""}`, { replace: true });
  };
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    // console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }

            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }

            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  return (
    <>
      <PrimaryHeader
        handleOnChange={handleOnChange}
        currentSelectValue={selectedValue}
        search={advanceSearch}
        entryForm={newEntryForm}
      />
      <Table
        style={{ padding: '2rem' }}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dcListData}
      />
    </>
  );
};
export default DCListComponent;
