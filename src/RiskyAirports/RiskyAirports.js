import React, { useState, Component } from "react";
import { Table } from "antd";
import { RiskyAirportscolumns, riskyAirportsData } from "../FakeData";
import PrimaryHeader from "../Header";
import { useNavigate } from "react-router-dom";

const Riskyairports = () => {
  const [selectedValue, setSelectedValue] = useState({
    id: 3,
    label: "Risky Airports",
    value: "risky-airports",
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    // const { value } = target;
    setSelectedValue(e);
    navigate(`/fraudnet-ui/list/${e ? e.value : ""}`, { replace: true });
  };
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
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
        key: "odd",
        text: "Select Odd Row",
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
        key: "even",
        text: "Select Even Row",
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
        // search={advanceSearch}
        // entryForm={newEntryForm}
      />
      <Table
        style={{ padding: "2rem" }}
        rowSelection={rowSelection}
        columns={RiskyAirportscolumns}
        dataSource={riskyAirportsData}
      />
    </>
  );
};
export default Riskyairports;
