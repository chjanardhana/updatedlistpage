import React, { useState, Component } from 'react';
import { Modal, Tabs, Select, DatePicker, Space, Table, Collapse } from 'antd';
import {
  domainTypeList,
  mainOptionsList,
  orgList,
  posNegListOptions,
} from '../optionsList';
import { CustomTable } from '../Table/Table';
import {
  acceptData,
  acceptItems,
  addressInfo,
  AddressInfoData,
  AndroidIDData,
  CityData,
  columns,
  CompanyData,
  CountryCodeData,
  CreditCardBINData,
  CreditCardHashedData,
  customItems,
  data,
  DeviceCarrierNameData,
  deviceInsightPrint,
  deviceItems,
  DeviceNameData,
  DeviceTypeData,
  DeviceTypeKeywordData,
  email,
  EmailData,
  EmailDomainData,
  emailItems,
  EmailTLDData,
  EmailUserData,
  EncrptedPasswordData,
  financialItems,
  geolcationItems,
  IPAddressCBlockData,
  IPData,
  ISPNameData,
  LanguageData,
  LexicalData,
  miscItems,
  MobileDeviceIDData,
  mostCommonItems,
  mothersMaidenNameData,
  NameData,
  NavigatorPlatformData,
  OrganizationIDData,
  phoneData,
  PhoneData,
  PostalCodeData,
  PromationalCodeData,
  resolvedID,
  ResolvedIDData,
  ScreenResolutionData,
  Sha1SimSerialNumberData,
  Sha1WifiMacData,
  ShipMethodTypeData,
  SpeciallyPurchaseData,
  SSNTaxIDData,
  StateData,
  TimeZoneData,
  userAccount,
  UserAccountData,
  UserCookieData,
  userItems,
  username,
  UsernameData,
  WaferIDData,
} from '../FakeData';
import PrimaryHeader from '../Header';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import "../custom.css";


const Posneglist = () => {
  const [searchModal, setAdvSearchModal] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [commonItems, setCommonItems] = useState(mostCommonItems);
  const [data, setAllData] = useState(addressInfo);
  const [pegModalForm, setModalForm] = useState(false);
  const [addressInfoModal, setaddressInfoModalModal] = useState(false);
  const [mostCommonUserName, setcommonUsername] = useState(false);
  const [mostCommonUserAcc, setcommonUserAccount] = useState(false);
  const [mostCommonEmail, setcommonEmail] = useState(false);
  const [mostCommonResolveId, setResolverId] = useState(false);
  const [formHeader, setSubFormName] = useState('');
  const [selectedValue, setSelectedValue] = useState({
    id: 1,
    label: 'PosNeg Lists',
    value: 'posneg-lists',
  });

  const { Panel } = Collapse;
  const { TabPane } = Tabs;
  const { Option } = Select;
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    // const { value } = target;
    setSelectedValue(e);
    navigate(`/fraudnet-ui/list/${e?e.value:''}`, { replace: true });
  };
  const handleOk = () => {
    setAdvSearchModal(!searchModal);
  };

  const handleCancel = () => {
    setAdvSearchModal(!searchModal);
  };
  const cancelpegModalForm = () => {
    setModalForm(!pegModalForm);
  };

  const handleDomainType = (e) => {
    // console.log(e, 'event.....');
    if (e === 1) {
      setaddressInfoModalModal(true);
      setResolverId(false);
      setcommonEmail(false);
      setcommonUsername(false);
      setcommonUserAccount(false);
    } else if (e === 2) {
      setResolverId(true);
      setcommonEmail(false);
      setaddressInfoModalModal(false);
      setcommonUsername(false);
      setcommonUserAccount(false);
    } else if (e === 3) {
      setSubFormName('Email');
    } else if (e === 4) {
      setSubFormName('Resolve ID');
    } else if (e === 5) {
      setSubFormName('User Account');
    } else if (e === 6) {
      setSubFormName('User Name');
    } else if (e === 7) {
      setSubFormName('Accept');
    } else if (e === 8) {
      setSubFormName('Accept Charset');
    } else if (e === 9) {
      setSubFormName('Accept Encoding');
    } else if (e === 10) {
      setSubFormName('Accept Language Code');
    } else if (e === 11) {
      setSubFormName('User Agent');
    } else if (e === 12) {
      setSubFormName('User Agent OS');
    } else if (e === 13) {
      setSubFormName('User Agent Type');
    } else if (e === 14) {
      setSubFormName('PHONE');
    } else if (e === 15) {
      setSubFormName('Android ID');
    } else if (e === 16) {
      setSubFormName('Device Carrier Name');
    } else if (e === 17) {
      setSubFormName('Device Name');
    } else if (e === 18) {
      setSubFormName('Device Type');
    } else if (e === 19) {
      setSubFormName('Device Type Keyword');
    } else if (e === 20) {
      setSubFormName('IP');
    } else if (e === 21) {
      setSubFormName('IP Address C Block');
    } else if (e === 22) {
      setSubFormName('ISP Name');
    } else if (e === 23) {
      setSubFormName('Language');
    } else if (e === 24) {
      setSubFormName('Mobile Device ID');
    } else if (e === 25) {
      setSubFormName('Navigator Platform');
    } else if (e === 26) {
      setSubFormName('Resolved ID');
    } else if (e === 27) {
      setSubFormName('Screen Resolution');
    } else if (e === 28) {
      setSubFormName('Sha1 Sim Serial Number');
    } else if (e === 29) {
      setSubFormName('Sha1 Wifi Mac');
    } else if (e === 30) {
      setSubFormName('Wafer ID');
    } else if (e === 31) {
      setSubFormName('Email');
    } else if (e === 32) {
      setSubFormName('Email Domain');
    } else if (e === 33) {
      setSubFormName('Email TLD');
    } else if (e === 34) {
      setSubFormName('Email User');
    } else if (e === 35) {
      setSubFormName('Credit Card BIN');
    } else if (e === 36) {
      setSubFormName('Credit Card Hashed');
    } else if (e === 37) {
      setSubFormName('Credit Card Type');
    } else if (e === 38) {
      setSubFormName('Financial Account Number');
    } else if (e === 39) {
      setSubFormName('Payment Subtype');
    } else if (e === 40) {
      setSubFormName('Payment Type');
    } else if (e === 41) {
      setSubFormName('Routing Number');
    } else if (e === 42) {
      setSubFormName('Address Info');
    } else if (e === 43) {
      setSubFormName('City');
    } else if (e === 44) {
      setSubFormName('Company');
    } else if (e === 45) {
      setSubFormName('Country Code');
    } else if (e === 46) {
      setSubFormName('Name');
    } else if (e === 47) {
      setSubFormName('Postal code');
    } else if (e === 48) {
      setSubFormName('State');
    } else if (e === 49) {
      setSubFormName('Time Zone');
    } else if (e === 50) {
      setSubFormName('Lexical');
    } else if (e === 51) {
      setSubFormName('Organization ID');
    } else if (e === 52) {
      setSubFormName('Promotional TYpe');
    } else if (e === 53) {
      setSubFormName('Ship Method Type');
    } else if (e === 54) {
      setSubFormName('Specilaty Purchase');
    } else if (e === 55) {
      setSubFormName('Encrypted Password');
    } else if (e === 56) {
      setSubFormName('Mothers Maiden Name');
    } else if (e === 57) {
      setSubFormName('SSN Tax ID');
    } else if (e === 58) {
      setSubFormName('User Account');
    } else if (e === 59) {
      setSubFormName('User Cookie');
    } else if (e === 60) {
      setSubFormName('Username');
    }
  };
  const showTables = (item) => {
    // console.log(listItem);
    if (item === 1) {
      setAllData(addressInfo);
    } else if (item === 2) {
      setAllData(deviceInsightPrint);
    } else if (item === 3) {
      setAllData(email);
    } else if (item === 4) {
      setAllData(resolvedID);
    } else if (item === 5) {
      setAllData(userAccount);
    } else {
      setAllData(username);
    }
  };
  // show accept table method
  const showAcceptTables = (item) => {
    if (item === 1) {
      setAllData(acceptData);
    } else if (item === 2) {
      setAllData(deviceInsightPrint);
      // setDevicePrint(deviceInsightPrint);
    } else if (item === 3) {
      setAllData(email);
    } else if (item === 4) {
      setAllData(resolvedID);
    } else if (item === 5) {
      setAllData(userAccount);
    } else {
      setAllData(username);
    }
  };
  // show Custom table method
  const showCustomTables = (item) => {
    if (item === 1) {
      setAllData(PhoneData);
    }
  };
  // show Device table method
  const showDeviceTables = (item) => {
    if (item === 1) {
      setAllData(AndroidIDData);
    } else if (item === 2) {
      setAllData(DeviceCarrierNameData);
      // setDevicePrint(deviceInsightPrint);
    } else if (item === 3) {
      setAllData(DeviceNameData);
    } else if (item === 4) {
      setAllData(deviceInsightPrint);
    } else if (item === 5) {
      setAllData(DeviceTypeData);
    } else if (item == 6) {
      setAllData(DeviceTypeKeywordData);
    } else if (item == 7) {
      setAllData(IPData);
    } else if (item == 8) {
      setAllData(IPAddressCBlockData);
    } else if (item == 9) {
      setAllData(ISPNameData);
    } else if (item == 10) {
      setAllData(LanguageData);
    } else if (item == 11) {
      setAllData(MobileDeviceIDData);
    } else if (item == 12) {
      setAllData(NavigatorPlatformData);
    } else if (item == 13) {
      setAllData(ResolvedIDData);
    } else if (item == 14) {
      setAllData(Sha1SimSerialNumberData);
    } else if (item == 14) {
      setAllData(Sha1WifiMacData);
    } else if (item == 15) {
      setAllData(WaferIDData);
    }
  };
  // show email table method
  const showEmailTables = (item) => {
    if (item === 1) {
      setAllData(EmailData);
    } else if (item === 2) {
      setAllData(EmailDomainData);
      // setDevicePrint(deviceInsightPrint);
    } else if (item === 3) {
      setAllData(EmailTLDData);
    } else if (item === 4) {
      setAllData(EmailUserData);
    }
  };
  // show Financial table method
  const showFinancialTables = (item) => {
    if (item === 1) {
      setAllData(CreditCardBINData);
    } else if (item === 2) {
      setAllData(CreditCardHashedData);
      // setDevicePrint(deviceInsightPrint);
    } else if (item === 3) {
      setAllData(EmailTLDData);
    } else if (item === 4) {
      setAllData(EmailUserData);
    }
  };
  //Geo location table method
  const showGeoLocationTables = (item) => {
    if (item === 1) {
      setAllData(AddressInfoData);
    } else if (item === 2) {
      setAllData(CityData);
      // setDevicePrint(deviceInsightPrint);
    } else if (item === 3) {
      setAllData(CompanyData);
    } else if (item === 4) {
      setAllData(CountryCodeData);
    } else if (item === 5) {
      setAllData(NameData);
    } else if (item === 6) {
      setAllData(phoneData);
    } else if (item === 7) {
      setAllData(PostalCodeData);
    } else if (item === 8) {
      setAllData(StateData);
    } else if (item === 9) {
      setAllData(TimeZoneData);
    }
  };
  //show Misc table
  const showMiscTables = (item) => {
    if (item === 1) {
      setAllData(LexicalData);
    } else if (item === 2) {
      setAllData(OrganizationIDData);
      // setDevicePrint(deviceInsightPrint);
    } else if (item === 3) {
      setAllData(PromationalCodeData);
    } else if (item === 4) {
      setAllData(ShipMethodTypeData);
    } else if (item === 5) {
      setAllData(SpeciallyPurchaseData);
    }
  };
  // Show user table
  const showUserTables = (item) => {
    if (item === 1) {
      setAllData(EncrptedPasswordData);
    } else if (item === 2) {
      setAllData(mothersMaidenNameData);
      // setDevicePrint(deviceInsightPrint);
    } else if (item === 3) {
      setAllData(SSNTaxIDData);
    } else if (item === 4) {
      setAllData(UserAccountData);
    } else if (item === 5) {
      setAllData(UserCookieData);
    } else if (item === 6) {
      setAllData(UsernameData);
    }
  };

  // handle radioButton
  const HandleRadioBtn = (e, list, type) => {
    console.log(commonItems);
    const optionsList = commonItems.map(
      (array) => {
        array.data.map((item) => (item.checked = item.id === list.id));
        return array;
      }
      // item.id == id ? { ...item, checked: !item.checked } : item
    );
    console.log(optionsList, 'list....');
    setCommonItems(optionsList);
    if (type === 'common') {
      showTables(list.value);
    } else if (type === 'accept') {
      showAcceptTables(list.value);
    } else if (type === 'custom') {
      showCustomTables(list.value);
    } else if (type === 'device') {
      showDeviceTables(list.value);
    } else if (type === 'email') {
      showEmailTables(list.value);
    } else if (type === 'financial') {
      showFinancialTables(list.value);
    } else if (type === 'geoLocation') {
      showGeoLocationTables(list.value);
    } else if (type === 'miscItems') {
      showMiscTables(list.value);
    } else {
      showUserTables(list.value);
    }
  };

  const onChange = (key = 1) => {
    // console.log(key);
  };
  const newEntryForm = () => {
    console.log('callllll');
    setModalForm(!pegModalForm);
  };
  const advanceSearch = () => {
    setAdvSearchModal(!searchModal);
  };
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
      <div className="row">
        <div className="col-xl-3">
          <div className="sideBar">
            {commonItems.map((list) => (
              <Collapse
                defaultActiveKey={['1']}
                onChange={() => onChange(list.key)}
              >
                <Panel header={list.header} key={list.key}>
                  <ul>
                    {list.data.map((item) => (
                      <li
                        className="listyleNone"
                        onClick={(e) => HandleRadioBtn(e, item, list.type)}
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
                </Panel>
              </Collapse>
            ))}
          </div>
        </div>
        <div className="col-xl-9 col-lg-9">
        <Tabs type="card">
            <TabPane tab="Negative" key="1">
              <CustomTable
                rowSelection={rowSelection}
                columns={columns}
                data={data}
              />
            </TabPane>
            <TabPane tab="Positive" key="2">
              <CustomTable
                rowSelection={rowSelection}
                columns={columns}
                data={data}
              />
            </TabPane>
            <TabPane tab="XSpecial" key="3">
              {/* <CustomTable
                rowSelection={rowSelection}
                columns={columns}
                data={data}
              /> */}
            </TabPane>
          </Tabs>
        </div>
        {pegModalForm && (
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
            visible={pegModalForm}
            // onOk={handleOk}
            onCancel={cancelpegModalForm}
          >
            <form>
              <div className="form-row">
                <div className="col-xl-6 col-lg-6 md-3">
                  <label for="domainType">Domain Type</label> <br />
                  <Select
                    style={{ width: 300 }}
                    options={domainTypeList}
                    onChange={(e) => handleDomainType(e)}
                  />
                  <p className="noteText mt-2">
                    {
                      'Note: only street Address and Postal Code are used for rule matching at this time'
                    }
                  </p>{' '}
                  {formHeader !== '' && (
                    <div className="inputBlock">
                      <label>{formHeader}</label> <br />
                      <input
                        type="text"
                        className="borderCCcolor sourceInput"
                        name={formHeader}
                      />
                    </div>
                  )}
                  {addressInfoModal && (
                    <div className="addressBlock">
                      <label>Street Address</label> <br />
                      <input
                        type="text"
                        name="address1"
                        className="borderCCcolor sourceInput addressInputsWidth"
                      />{' '}
                      <br />
                      <label>Street Address2</label> <br />
                      <input
                        type="text"
                        name="address2"
                        className="borderCCcolor sourceInput addressInputsWidth"
                      />{' '}
                      <br />
                      <label>City</label> <br />
                      <input
                        type="text"
                        name="city"
                        className="borderCCcolor sourceInput addressInputsWidth"
                      />{' '}
                      <br />
                      <label>Postal Code</label> <br />
                      <input
                        type="text"
                        name="postcode"
                        className="borderCCcolor sourceInput addressInputsWidth"
                      />{' '}
                      <br />
                      <label>State/Province</label> <br />
                      <input
                        type="text"
                        name="state"
                        className="borderCCcolor sourceInput addressInputsWidth"
                      />{' '}
                      <br />
                      <label>Country</label> <br />
                      <input
                        type="text"
                        name="country"
                        className="borderCCcolor sourceInput addressInputsWidth"
                      />{' '}
                      <br />
                    </div>
                  )}
                </div>
                <div className="offset-xl-1 offset-lg-1 col-xl-5">
                  <label for="list">List</label> <br />
                  <Select style={{ width: 200 }} options={posNegListOptions} />
                  <br />
                  <label for="source" className="mt-2">
                    Source
                  </label>{' '}
                  <br />
                  <input
                    type="text"
                    className="borderCCcolor sourceInput"
                  />{' '}
                  <br />
                  <label className="mt-2">Organization</label> <br />
                  <Select
                    style={{ width: 200 }}
                    options={[
                      { id: 1, label: 'BONDORG', value: 1 },
                      { id: 2, label: 'ORG123', value: 2 },
                      { id: 3, label: '12655', value: 3 },
                    ]}
                  />{' '}
                  <br />
                  <label className="mt-2">Comments</label> <br />
                  <textarea
                    style={{ width: 200 }}
                    className="borderCCcolor"
                  ></textarea>
                </div>
              </div>
            </form>
          </Modal>
        )}
        {searchModal && (
          <Modal
            width={370}
            title="Advanced Search"
            footer={[
              <>
                <button className="btn btn-primary mr-2">Search</button>
                <button className="btn btn-light">Clear Form</button>
              </>,
            ]}
            visible={searchModal}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <form>
              <div class="form-row">
                <div class="col-md-12 col-lg-12 mb-3">
                  <label for="validationDefault01">Source</label>
                  <input
                    type="text"
                    class="form-control"
                    id="source"
                    // placeholder="First name"

                    required
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-12 col-lg-12 mb-3">
                  <label for="validationDefault03">Comments</label>
                  <input
                    type="text"
                    class="form-control"
                    id="comments"
                    required
                  />
                </div>
                <div class="col-md-12 col-lg-12 mb-3">
                  <label for="validationDefault04">Updated By</label> <br />
                  <Select
                    showSearch
                    style={{ width: 300 }}
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    filterSort={(optionA, optionB) =>
                      optionA.children
                        .toLowerCase()
                        .localeCompare(optionB.children.toLowerCase())
                    }
                  >
                    <Option value="1">New User KV</Option>
                    <Option value="2">FNPL-32601 reg</Option>
                    <Option value="3">FNPL-40042 reproduce</Option>
                    <Option value="4">FNPL-40269 reproduce1</Option>
                    <Option value="5">AWS User</Option>
                    <Option value="6">REG TEST123</Option>
                  </Select>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-12 col-lg-12 mb-3">
                  <label for="validationDefault01">Date Range</label> <br />
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <Space direction="vertical">
                        <DatePicker onChange={undefined} />
                      </Space>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <Space>
                        <DatePicker onChange={undefined} />
                      </Space>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-12 col-lg-12">
                  <label for="validationDefault01">Organization</label>
                  <Select
                    style={{ width: 300 }}
                    mode="multiple"
                    options={orgList}
                  />
                </div>
              </div>
            </form>
          </Modal>
        )}
        );
      </div>
    </>
  );
};
export default Posneglist;
