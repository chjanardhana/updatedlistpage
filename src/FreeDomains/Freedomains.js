import React, { useState, Component } from "react";
import { Table, Modal } from "antd";
import PrimaryHeader from "../Header";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const columns = [
  {
    title: "Domain Name",
    dataIndex: "name",
  },
  {
    title: "Comments",
    dataIndex: "comments",
  },
  {
    title: "Updated Date",
    dataIndex: "date",
  },
];
const ofcListData = [];
for (let i = 0; i < 6; i++) {
  ofcListData.push({
    key: i,
    name: "janardhan@bristlecone.com",
    comments: "Hello World",
    date: "05/03/2022",
  });
}
const Freedomain = () => {
  // const { newEntryForm } = props;
  const [searchModal, setAdvSearchModal] = useState(false);
  const [newEntryModal, setModalForm] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    id: 7,
    label: "Free Domains",
    value: "free-domains",
  });
  const navigate = useNavigate();
  const newEntryForm = () => {
    // console.log("callllll");
    setModalForm(!newEntryModal);
  };
  const advanceSearch = () => {
    setAdvSearchModal(!searchModal);
  };
  const handleOnChange = (e) => {
    // console.log(e, "fffff");
    // const { value } = target;
    setSelectedValue(e);
    navigate(`/fraudnet-ui/list/${e ? e.value : ""}`, { replace: true });
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
        //  className='customTable'
        //  pagination={{position: "bottomCenter"}}
        style={{ padding: "2rem" }}
        columns={columns}
        dataSource={ofcListData}
      />
      {newEntryModal && (
        <Modal
          width={800}
          title="New PosNeg Entry"
          footer={[
            <>
              <button className="btn btn-primary mr-2" disabled>
                Add New Entry
              </button>
              <button className="btn btn-light">Cancel</button>
            </>,
          ]}
          visible={newEntryModal}
          // onOk={handleOk}
          // onCancel={cancelpegModalForm}
        >
          fdfdfdfdfdfd
        </Modal>
      )}
    </>
  );
};
// }
export default Freedomain;
