//posNeg Columns
const columns = [
  {
    title: 'Value',
    dataIndex: 'value',
  },
  {
    title: 'Source',
    dataIndex: 'source',
  },
  {
    title: 'Comments',
    dataIndex: 'comments',
  },
  {
    title: 'Event',
    dataIndex: 'event',
  },
  {
    title: 'Updated Date',
    dataIndex: 'date',
  },
];
//Exceptions list columns
const exceptionsColumns = [
  {
    title: 'Value',
    dataIndex: 'value',
  },
  {
    title: 'Domain Type',
    dataIndex: 'domain',
  },
  {
    title: 'Updated Date',
    dataIndex: 'date',
  },
];
//Risky Airports columns
const RiskyAirportscolumns = [
  {
    title: 'From Airport',
    dataIndex: 'from',
  },
  {
    title: 'To Airport',
    dataIndex: 'to',
  },
  {
    title: 'Time to Depart (in)',
    dataIndex: 'depart',
  },
  {
    title: 'Model',
    dataIndex: 'model',
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
  {
    title: 'Score',
    dataIndex: 'score',
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
//Risky Products columns
const RiskyProductsColumns = [
  {
    title: 'Value',
    dataIndex: 'value',
  },
  {
    title: 'Quantity',
    dataIndex: 'qty',
  },
  {
    title: 'Unit Amount Threshold',
    dataIndex: 'unitamount',
  },
  {
    title: 'Line Total Amount',
    dataIndex: 'lineamount',
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
  {
    title: 'Score',
    dataIndex: 'score',
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
// Most common fake data
const addressInfo = [];
for (let i = 0; i < 6; i++) {
  addressInfo.push({
    key: i,
    value: `test12${i}`,
    comments: 'Test VS',
    source: `asd ${i + 1}`,
    event: 'Event',
    date: '05/03/2022',
  });
}
const deviceInsightPrint = [];
for (let i = 0; i < 6; i++) {
  deviceInsightPrint.push({
    key: i,
    value: `ADFERE455${i}`,
    comments: 'CONFIRMED FRAUD',
    source: `Test_2021-01-05T12:00:32.761Z"`,
    event: 'Event',
    date: '02/08/2022',
  });
}
const email = [];
for (let i = 0; i < 6; i++) {
  email.push({
    key: i,
    value: `testqwert@gmail.com${i}`,
    comments: 'test',
    source: `12347`,
    event: '',
    date: '05/17/2022',
  });
}
const resolvedID = [];
for (let i = 0; i < 3; i++) {
  resolvedID.push({
    key: i,
    value: `12345${i}`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/15/2021',
  });
}
const userAccount = [];
for (let i = 0; i < 3; i++) {
  userAccount.push({
    key: i,
    value: `123ww45${i}`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
const username = [];
for (let i = 0; i < 3; i++) {
  username.push({
    key: i,
    value: `man_d`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
// Accept  fake data
const acceptData = [];
for (let i = 0; i < 3; i++) {
  acceptData.push({
    key: i,
    value: `man_d`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
//Custom fake data
const PhoneData = [];
for (let i = 0; i < 3; i++) {
  PhoneData.push({
    key: i,
    value: `man_d`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
//Devicefake data
const AndroidIDData = [];
for (let i = 0; i < 3; i++) {
  AndroidIDData.push({
    key: i,
    value: ``,
    comments: '',
    source: ``,
    event: '',
    date: '',
  });
}
const DeviceCarrierNameData = [];
for (let i = 0; i < 3; i++) {
  DeviceCarrierNameData.push({
    key: i,
    value: ``,
    comments: '',
    source: ``,
    event: '',
    date: '',
  });
}
const DeviceNameData = [];
for (let i = 0; i < 6; i++) {
  DeviceNameData.push({
    key: i,
    value: `devicename+300`,
    comments: '',
    source: ``,
    event: '',
    date: '03/08/2022',
  });
}
const deviceInsightPrintData = [];
for (let i = 0; i < 6; i++) {
  deviceInsightPrintData.push({
    key: i,
    value: `devicename+300`,
    comments: '',
    source: ``,
    event: '',
    date: '03/08/2022',
  });
}
const DeviceTypeData = [];
for (let i = 0; i < 6; i++) {
  DeviceTypeData.push({
    key: i,
    value: `devicename+300`,
    comments: '',
    source: ``,
    event: '',
    date: '03/08/2022',
  });
}
const DeviceTypeKeywordData = [];
for (let i = 0; i < 6; i++) {
  DeviceTypeKeywordData.push({
    key: i,
    value: `devicename+300`,
    comments: '',
    source: ``,
    event: '',
    date: '03/08/2022',
  });
}
const IPData = [];
for (let i = 0; i < 6; i++) {
  IPData.push({
    key: i,
    value: `devicename+300`,
    comments: '',
    source: ``,
    event: '',
    date: '03/08/2022',
  });
}
const IPAddressCBlockData = [];
for (let i = 0; i < 6; i++) {
  IPAddressCBlockData.push({
    key: i,
    value: `devicename+300`,
    comments: '',
    source: ``,
    event: '',
    date: '03/08/2022',
  });
}
const ISPNameData = [];
for (let i = 0; i < 6; i++) {
  ISPNameData.push({
    key: i,
    value: `devicename+300`,
    comments: '',
    source: ``,
    event: '',
    date: '03/08/2022',
  });
}
const LanguageData = [];
for (let i = 0; i < 6; i++) {
  LanguageData.push({
    key: i,
    value: `devicename+300`,
    comments: '',
    source: ``,
    event: '',
    date: '03/08/2022',
  });
}
const MobileDeviceIDData = [];
for (let i = 0; i < 6; i++) {
  MobileDeviceIDData.push({
    key: i,
    value: `devicename+300`,
    comments: '',
    source: ``,
    event: '',
    date: '03/08/2022',
  });
}
const NavigatorPlatformData = [];
for (let i = 0; i < 6; i++) {
  NavigatorPlatformData.push({
    key: i,
    value: `devicename+300`,
    comments: '',
    source: ``,
    event: '',
    date: '03/08/2022',
  });
}
const ResolvedIDData = [];
for (let i = 0; i < 3; i++) {
  ResolvedIDData.push({
    key: i,
    value: `12345`,
    comments: '',
    source: `man_id`,
    event: '',
    date: '03/08/2022',
  });
}
const ScreenResolutionData = [];
for (let i = 0; i < 6; i++) {
  ScreenResolutionData.push({
    key: i,
    value: `12345`,
    comments: '',
    source: `man_id`,
    event: '',
    date: '03/08/2022',
  });
}
const Sha1SimSerialNumberData = [];
for (let i = 0; i < 6; i++) {
  Sha1SimSerialNumberData.push({
    key: i,
    value: `12345`,
    comments: '',
    source: `man_id`,
    event: '',
    date: '03/08/2022',
  });
}
const Sha1WifiMacData = [];
for (let i = 0; i < 6; i++) {
  Sha1WifiMacData.push({
    key: i,
    value: `12345`,
    comments: '',
    source: `man_id`,
    event: '',
    date: '03/08/2022',
  });
}
const WaferIDData = [];
for (let i = 0; i < 6; i++) {
  WaferIDData.push({
    key: i,
    value: `12345`,
    comments: '',
    source: `man_id`,
    event: '',
    date: '03/08/2022',
  });
}
//Emailfake data
const EmailData = [];
for (let i = 0; i < 6; i++) {
  EmailData.push({
    key: i,
    value: `man_d`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
const EmailDomainData = [];
for (let i = 0; i < 3; i++) {
  EmailDomainData.push({
    key: i,
    value: `123_d`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
const EmailTLDData = [];
for (let i = 0; i < 3; i++) {
  EmailTLDData.push({
    key: i,
    value: `123_d`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
const EmailUserData = [];
for (let i = 0; i < 3; i++) {
  EmailUserData.push({
    key: i,
    value: `123_d`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
//Exceptions table data
const exceptionsListData = [];
for (let i = 0; i < 6; i++) {
  exceptionsListData.push({
    key: i,
    value: `test12${i}`,
    domain: 'Address Info',
    date: '05/03/2022',
  });
}

//Financial table data
const CreditCardBINData = [];
for (let i = 0; i < 3; i++) {
  CreditCardBINData.push({
    key: i,
    value: `123_d`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
const CreditCardHashedData = [];
for (let i = 0; i < 3; i++) {
  CreditCardHashedData.push({
    key: i,
    value: `123_d`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
//Geo locationa table
const AddressInfoData = [];
for (let i = 0; i < 3; i++) {
  AddressInfoData.push({
    key: i,
    value: `123_d`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
const CityData = [];
for (let i = 0; i < 3; i++) {
  CityData.push({
    key: i,
    value: `123_d`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
const CompanyData = [];
for (let i = 0; i < 3; i++) {
  CompanyData.push({
    key: i,
    value: `123_d`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
const CountryCodeData = [];
for (let i = 0; i < 3; i++) {
  CountryCodeData.push({
    key: i,
    value: `123_d`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
const NameData = [];
for (let i = 0; i < 3; i++) {
  NameData.push({
    key: i,
    value: `123_d`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
const phoneData = [];
for (let i = 0; i < 3; i++) {
  phoneData.push({
    key: i,
    value: `123_d`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
const PostalCodeData = [];
for (let i = 0; i < 3; i++) {
  PostalCodeData.push({
    key: i,
    value: `123_d`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
const StateData = [];
for (let i = 0; i < 3; i++) {
  StateData.push({
    key: i,
    value: `123_d`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
const TimeZoneData = [];
for (let i = 0; i < 3; i++) {
  TimeZoneData.push({
    key: i,
    value: `123_d`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
//Show the Misc table
const LexicalData = [];
for (let i = 0; i < 3; i++) {
  LexicalData.push({
    key: i,
    value: `KVMNL_1`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
const OrganizationIDData = [];
for (let i = 0; i < 3; i++) {
  OrganizationIDData.push({
    key: i,
    value: `123_d`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
const PromationalCodeData = [];
for (let i = 0; i < 3; i++) {
  PromationalCodeData.push({
    key: i,
    value: `c679i`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
const ShipMethodTypeData = [];
for (let i = 0; i < 3; i++) {
  ShipMethodTypeData.push({
    key: i,
    value: `3rd Day`,
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
const SpeciallyPurchaseData = [];
for (let i = 0; i < 3; i++) {
  SpeciallyPurchaseData.push({
    key: i,
    value: 'hiol',
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
//show username table
const EncrptedPasswordData = [];
for (let i = 0; i < 3; i++) {
  EncrptedPasswordData.push({
    key: i,
    value: 'cds',
    comments: '1238',
    source: `test_1`,
    event: '',
    date: '03/01/2021',
  });
}
const mothersMaidenNameData = [];
for (let i = 0; i < 8; i++) {
  mothersMaidenNameData.push({
    key: i,
    value: 'newentry123',
    comments: '',
    source: `man_id`,
    event: '',
    date: '03/01/2021',
  });
}
const SSNTaxIDData = [];
for (let i = 0; i < 3; i++) {
  SSNTaxIDData.push({
    key: i,
    value: '123@',
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
const UserAccountData = [];
for (let i = 0; i < 3; i++) {
  UserAccountData.push({
    key: i,
    value: '12www445',
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
const UserCookieData = [];
for (let i = 0; i < 3; i++) {
  UserCookieData.push({
    key: i,
    value:
      'userFont=Queens Gypfspd; userGuid=DB1094E0-4F89-11D3-9A0C-0305E82C3301; userLocale=en-CA',
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
const UsernameData = [];
for (let i = 0; i < 3; i++) {
  UsernameData.push({
    key: i,
    value: 'man_d',
    comments: '',
    source: `man_d`,
    event: '',
    date: '03/01/2021',
  });
}
//Risky Airports data
const riskyAirportsData = [];
for (let i = 0; i < 6; i++) {
  riskyAirportsData.push({
    key: i,
    from: `airport111${i + 1}`,
    to: 'MUM',
    depart: 23443,
    model: 'TravelModel',
    action: 'Follow Rule',
    score: '1300',
    comments: 'get well soon',
    date: '05/03/2022',
  });
}
//Risky Products data
const keyWordsData = [];
for (let i = 0; i < 6; i++) {
  keyWordsData.push({
    key: i,
    value: `keyword361${i}`,
    qty: `${i + 1}`,
    unitamount: '12 (USD)',
    lineamount: '13 (ARS)',
    action: 'Approve',
    score: '9999',
    comments: `regression 5.9.${i + 1}`,
    date: '05/03/2022',
  });
}
const mostCommonItems = [
  {
    key: '1',
    header: 'Most Common',
    type: 'common',
    data: [
      { id: 1, text: 'Address Info', value: 1, checked: true },
      { id: 2, text: 'DeviceInsight Print', value: 2, checked: false },
      { id: 3, text: 'Email', value: 3, checked: false },
      { id: 4, text: 'Resolve ID', value: 4, checked: false },
      { id: 5, text: 'User Account', value: 5, checked: false },
      { id: 6, text: 'Username', value: 6, checked: false },
    ],
  },
  {
    key: '2',
    header: 'Accept',
    type: 'accept',
    data: [
      { id: 7, text: 'Accept', value: 7, checked: false },
      { id: 8, text: 'Accept Charset', value: 8, checked: false },
      { id: 9, text: 'Accept Encoding', value: 9, checked: false },
      { id: 10, text: 'Accept Language Code', value: 10, checked: false },
      { id: 11, text: 'User Agent', value: 11, checked: false },
      { id: 12, text: 'User Agent OS', value: 12, checked: false },
      { id: 13, text: 'User Agent Type', value: 13, checked: false },
    ],
  },
  {
    key: '3',
    header: 'Custom',
    type: 'custom',
    data: [{ id: 14, text: 'PHONE', value: 14, checked: false }],
  },
  {
    key: '4',
    header: 'Device',
    type: 'device',
    data: [
      { id: 15, text: 'Android ID', value: 15, checked: false },
      { id: 16, text: 'Device Carrier Name', value: 16, checked: false },
      { id: 17, text: 'Device Name', value: 17, checked: false },
      { id: 18, text: 'deviceInsight Print', value: 18, checked: false },
      { id: 19, text: 'Device Type', value: 19, checked: false },
      { id: 20, text: 'Device Type Keyword', value: 20, checked: false },
      { id: 21, text: 'IP', value: 21, checked: false },
      { id: 22, text: 'IP Address C Block', value: 22, checked: false },
      { id: 23, text: 'ISP Name', value: 23, checked: false },
      { id: 24, text: 'Language', value: 24, checked: false },
      { id: 25, text: 'Mobile Device ID', value: 25, checked: false },
      { id: 26, text: 'Navigator Platform', value: 26, checked: false },
      { id: 27, text: 'Resolved ID', value: 27, checked: false },
      { id: 28, text: 'Screen Resolution', value: 28, checked: false },
      { id: 29, text: 'Sha 1 Sim Serial Number', value: 29, checked: false },
      { id: 30, text: 'Sha 1 Wifi Mac', value: 30, checked: false },
      { id: 31, text: 'Wafer ID', value: 31, checked: false },
    ],
  },
  {
    key: '5',
    header: 'Email',
    type: 'email',
    data: [
      { id: 32, text: 'Email', value: 32, checked: false },
      { id: 33, text: 'Email Domain', value: 33, checked: false },
      { id: 34, text: 'Email TLD', value: 34, checked: false },
      { id: 35, text: 'Email User', value: 35, checked: false },
    ],
  },
  {
    key: '6',
    header: 'Financial',
    type: 'financial',
    data: [
      { id: 36, text: 'Credit Card BIN', value: 38, checked: false },
      { id: 37, text: 'Credit Card Hashed', value: 37, checked: false },
      { id: 38, text: 'Credit Card Type', value: 38, checked: false },
      { id: 39, text: 'Financial Account Number', value: 39, checked: false },
      { id: 40, text: 'Payment Subtype', value: 40, checked: false },
      { id: 41, text: 'Payment Type', value: 43, checked: false },
      { id: 42, text: 'Routing Number', value: 42, checked: false },
    ],
  },
  {
    key: '7',
    header: 'Geo Location',
    type: 'geoLocation',
    data: [
      { id: 43, text: 'Address Info', value: 43, checked: false },
      { id: 44, text: 'City', value: 44, checked: false },
      { id: 45, text: 'Company', value: 45, checked: false },
      { id: 46, text: 'Country code', value: 46, checked: false },
      { id: 47, text: 'Name', value: 47, checked: false },
      { id: 48, text: 'Postal Code', value: 48, checked: false },
      { id: 49, text: 'State', value: 49, checked: false },
      { id: 50, text: 'Time Zone', value: 50, checked: false },
    ],
  },
  {
    key: '8',
    header: 'Misc',
    type: 'miscItems',
    data: [
      { id: 51, text: 'Lexical', value: 51, checked: false },
      { id: 52, text: 'Organization ID', value: 52, checked: false },
      { id: 53, text: 'Promatonal Code', value: 53, checked: false },
      { id: 54, text: 'Ship Method Type', value: 54, checked: false },
      { id: 55, text: 'Specialty Purchase', value: 55, checked: false },
    ],
  },
  {
    key: '9',
    header: 'User',
    type: 'user',
    data: [
      { id: 56, text: 'Encrpted Password', value: 56, checked: false },
      { id: 57, text: 'mothers Maiden Name', value: 57, checked: false },
      { id: 58, text: 'SSN Tax ID', value: 58, checked: false },
      { id: 59, text: 'User Account', value: 59, checked: false },
      { id: 60, text: 'User Cookie', value: 60, checked: false },
      { id: 61, text: 'Username', value: 61, checked: false },
    ],
  },
];

export {
  addressInfo,
  columns,
  mostCommonItems,
  deviceInsightPrint,
  email,
  resolvedID,
  userAccount,
  username,
  acceptData,
  PhoneData,
  AndroidIDData,
  DeviceCarrierNameData,
  DeviceNameData,
  deviceInsightPrintData,
  DeviceTypeData,
  DeviceTypeKeywordData,
  IPData,
  IPAddressCBlockData,
  ISPNameData,
  LanguageData,
  MobileDeviceIDData,
  NavigatorPlatformData,
  ResolvedIDData,
  ScreenResolutionData,
  Sha1SimSerialNumberData,
  Sha1WifiMacData,
  WaferIDData,
  EmailData,
  EmailDomainData,
  EmailTLDData,
  EmailUserData,
  CreditCardBINData,
  CreditCardHashedData,
  AddressInfoData,
  exceptionsListData,
  CityData,
  CompanyData,
  CountryCodeData,
  NameData,
  phoneData,
  PostalCodeData,
  StateData,
  TimeZoneData,
  LexicalData,
  OrganizationIDData,
  PromationalCodeData,
  ShipMethodTypeData,
  SpeciallyPurchaseData,
  EncrptedPasswordData,
  mothersMaidenNameData,
  SSNTaxIDData,
  UserAccountData,
  UserCookieData,
  UsernameData,
  RiskyProductsColumns,
  RiskyAirportscolumns,
  keyWordsData,
  riskyAirportsData,
  exceptionsColumns,
};
