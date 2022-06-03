import React, { useState, Component } from 'react';
import { Table } from 'antd';
import {RiskyProductsColumns, keyWordsData} from '../FakeData';
import PrimaryHeader from '../Header';
import {useNavigate} from 'react-router-dom';

const inputs =  [
  { id: 1, text: 'Keyword', value: 1, checked: true },
  { id: 2, text: 'Category', value: 2, checked: false },
  { id: 3, text: 'SKU', value: 3, checked: false }
];

const Riskyproducts  = () => {
//   const {advanceSearch, newEntryForm } = props;
//   const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [commonItems, setCommonItems] = useState(inputs);
  const [data, setAllData] = useState(keyWordsData);
  const [selectedValue, setSelectedValue] = useState({
    id: 4,
    label: 'Risky Products',
    value: 'risky-products',
  }); 
   const navigate = useNavigate();

  const handleOnChange = (e) => {
    // const { value } = target;
    setSelectedValue(e);
    navigate(`/fraudnet-ui/list/${e?e.value:""}`, { replace: true });
  };

//   const onChange = (key) => {
//     console.log(key);
//   };

//   const onSelectChange = (newSelectedRowKeys) => {
//     // console.log("selectedRowKeys changed: ", selectedRowKeys);
//     setSelectedRowKeys(newSelectedRowKeys);
//   };
 // handle radioButton
 const HandleRadioBtn = (e, list) => {
  const optionsList = commonItems.map(
    (item) => {
      item.checked = item.id === list.id;
      return item;
    }
  );
  setCommonItems(optionsList);
  if (list.text === 'Keyword') {
    setAllData(keyWordsData)
  } else if (list.text === 'Category') {
    setAllData(keyWordsData)
  } else  {
    setAllData(keyWordsData)
  }
}


//   const rowSelection = {
//     selectedRowKeys,
//     onChange: onSelectChange,
//     selections: [
//       Table.SELECTION_ALL,
//       Table.SELECTION_INVERT,
//       Table.SELECTION_NONE,
//       {
//         key: 'odd',
//         text: 'Select Odd Row',
//         onSelect: (changableRowKeys) => {
//           let newSelectedRowKeys = [];
//           newSelectedRowKeys = changableRowKeys.filter((_, index) => {
//             if (index % 2 !== 0) {
//               return false;
//             }

//             return true;
//           });
//           setSelectedRowKeys(newSelectedRowKeys);
//         },
//       },
//       {
//         key: 'even',
//         text: 'Select Even Row',
//         onSelect: (changableRowKeys) => {
//           let newSelectedRowKeys = [];
//           newSelectedRowKeys = changableRowKeys.filter((_, index) => {
//             if (index % 2 !== 0) {
//               return true;
//             }

//             return false;
//           });
//           setSelectedRowKeys(newSelectedRowKeys);
//         },
//       },
//     ],
//   };

  return (
    <>
      <PrimaryHeader
      handleOnChange={handleOnChange}
      currentSelectValue={selectedValue}
      // search={advanceSearch}
      // entryForm={newEntryForm}
      />
      <div className="row">
        <div className="col-xl-2 col-lg-2 col-md-2">
          <div style={{margin:'1rem'}}>

          <ul>
                    {commonItems.map((item) => (
                      <li
                        className="listyleNone"
                        style={{marginBottom: '8px'}}
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
        <div className="col-xl-10 col-lg-10 col-md-10">
          <Table
           style={{ padding: '2rem' }}
            // rowSelection={rowSelection}
            columns={RiskyProductsColumns}
            dataSource={data}
          />
        </div>
      </div>
    </>
  );
                    
};

export default Riskyproducts;
