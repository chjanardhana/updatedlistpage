import React, { useState } from "react";
import { Table } from "antd";
import { exceptionsColumns, exceptionsListData } from "../FakeData";
import PrimaryHeader from "../Header";
import { useNavigate } from "react-router-dom";

const inputs = [
  { id: 1, text: "Address0016", value: 1, checked: true },
  { id: 2, text: "Address0033", value: 2, checked: false },
  { id: 3, text: "Address3314", value: 3, checked: false },
  { id: 4, text: "Address3314", value: 4, checked: false },
  { id: 5, text: "Country Exception List", value: 5, checked: false },
  { id: 6, text: "Custom testing phone", value: 6, checked: false },
  { id: 7, text: "OL_VS", value: 7, checked: false },
];
const Exceptionlist = () => {
  const [commonItems, setCommonItems] = useState(inputs);
  const [selectedValue, setSelectedValue] = useState({
    id: 2,
    label: "Exception list",
    value: "exception",
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    console.log(e);
    // const { value } = target;
    setSelectedValue(e);
    navigate(`/fraudnet-ui/list/${e ? e.value : ""}`, { replace: true });
  };
  const [data, setAllData] = useState(exceptionsListData);
  const HandleRadioBtn = (e, list) => {
    const optionsList = commonItems.map((item) => {
      item.checked = item.id === list.id;
      return item;
    });
    setCommonItems(optionsList);
    if (list.text === "Keyword") {
      setAllData(exceptionsListData);
    } else if (list.text === "Category") {
      setAllData(exceptionsListData);
    } else {
      setAllData(exceptionsListData);
    }
  };
  return (
    <>
      <PrimaryHeader
        handleOnChange={handleOnChange}
        currentSelectValue={selectedValue}
        // search={advanceSearch}
        // entryForm={newEntryForm}
      />
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-3">
          <div style={{ margin: "1rem" }}>
            <ul>
              {commonItems.map((item) => (
                <li
                  className="listyleNone"
                  style={{ marginBottom: "8px" }}
                  onClick={(e) => HandleRadioBtn(e, item)}
                >
                  <input
                    type="radio"
                    className="mr-2"
                    key={item.id}
                    id={item.id}
                    checked={item.checked}
                  />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-9">
          <Table
            style={{ padding: "2rem" }}
            // rowSelection={rowSelection}
            columns={exceptionsColumns}
            dataSource={exceptionsListData}
          />
        </div>
      </div>
    </>
  );
};
export default Exceptionlist;
