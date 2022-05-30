const columns = [
  {
    title: "Value",
    dataIndex: "value",
  },
  {
    title: "Source",
    dataIndex: "source",
  },
  {
    title: "Comments",
    dataIndex: "comments",
  },
  {
    title: "Event",
    dataIndex: "event",
  },
  {
    title: "Updated Date",
    dataIndex: "date",
  },
];
// Most common fake data
const addressInfo = [];
for (let i = 0; i < 6; i++) {
  addressInfo.push({
    key: i,
    value: `test12${i}`,
    comments: "Test VS",
    source: `asd ${i + 1}`,
    event: "Event",
    date: "05/03/2022",
  });
}
const deviceInsightPrint = [];
for (let i = 0; i < 6; i++) {
  deviceInsightPrint.push({
    key: i,
    value: `ADFERE455${i}`,
    comments: "CONFIRMED FRAUD",
    source: `Test_2021-01-05T12:00:32.761Z"`,
    event: "Event",
    date: "02/08/2022",
  });
}
const email = [];
for (let i = 0; i < 6; i++) {
  email.push({
    key: i,
    value: `testqwert@gmail.com${i}`,
    comments: "test",
    source: `12347`,
    event: "",
    date: "05/17/2022",
  });
}
const resolvedID = [];
for (let i = 0; i < 3; i++) {
  resolvedID.push({
    key: i,
    value: `12345${i}`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/15/2021",
  });
}
const userAccount = [];
for (let i = 0; i < 3; i++) {
  userAccount.push({
    key: i,
    value: `123ww45${i}`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
}
const username = [];
for (let i = 0; i < 3; i++) {
  username.push({
    key: i,
    value: `man_d`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
// Accept  fake data
const acceptData = [];
for (let i = 0; i < 3; i++) {
  acceptData.push({
    key: i,
    value: `man_d`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
//Custom fake data
const PhoneData = [];
for (let i = 0; i < 3; i++) {
  PhoneData.push({
    key: i,
    value: `man_d`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
//Devicefake data
const AndroidIDData = [];
for (let i = 0; i < 3; i++) {
  AndroidIDData.push({
    key: i,
    value: ``,
    comments: "",
    source: ``,
    event: "",
    date: "",
  });
};
const DeviceCarrierNameData = [];
for (let i = 0; i < 3; i++) {
  DeviceCarrierNameData.push({
    key: i,
    value: ``,
    comments: "",
    source: ``,
    event: "",
    date: "",
  });
};
const DeviceNameData = [];
for (let i = 0; i < 6; i++) {
  DeviceNameData.push({
    key: i,
    value: `devicename+300`,
    comments: "",
    source: ``,
    event: "",
    date: "03/08/2022",
  });
};
const deviceInsightPrintData = [];
for (let i = 0; i < 6; i++) {
  deviceInsightPrintData.push({
    key: i,
    value: `devicename+300`,
    comments: "",
    source: ``,
    event: "",
    date: "03/08/2022",
  });
};
const DeviceTypeData = [];
for (let i = 0; i < 6; i++) {
  DeviceTypeData.push({
    key: i,
    value: `devicename+300`,
    comments: "",
    source: ``,
    event: "",
    date: "03/08/2022",
  });
};
const DeviceTypeKeywordData = [];
for (let i = 0; i < 6; i++) {
  DeviceTypeKeywordData.push({
    key: i,
    value: `devicename+300`,
    comments: "",
    source: ``,
    event: "",
    date: "03/08/2022",
  });
};
const IPData = [];
for (let i = 0; i < 6; i++) {
  IPData.push({
    key: i,
    value: `devicename+300`,
    comments: "",
    source: ``,
    event: "",
    date: "03/08/2022",
  });
};
const IPAddressCBlockData = [];
for (let i = 0; i < 6; i++) {
  IPAddressCBlockData.push({
    key: i,
    value: `devicename+300`,
    comments: "",
    source: ``,
    event: "",
    date: "03/08/2022",
  });
};
const ISPNameData = [];
for (let i = 0; i < 6; i++) {
  ISPNameData.push({
    key: i,
    value: `devicename+300`,
    comments: "",
    source: ``,
    event: "",
    date: "03/08/2022",
  });
};
const LanguageData = [];
for (let i = 0; i < 6; i++) {
  LanguageData.push({
    key: i,
    value: `devicename+300`,
    comments: "",
    source: ``,
    event: "",
    date: "03/08/2022",
  });
};
const MobileDeviceIDData = [];
for (let i = 0; i < 6; i++) {
MobileDeviceIDData.push({
    key: i,
    value: `devicename+300`,
    comments: "",
    source: ``,
    event: "",
    date: "03/08/2022",
  });
};
const NavigatorPlatformData = [];
for (let i = 0; i < 6; i++) {
NavigatorPlatformData.push({
    key: i,
    value: `devicename+300`,
    comments: "",
    source: ``,
    event: "",
    date: "03/08/2022",
  });
};
const ResolvedIDData = [];
for (let i = 0; i < 3; i++) {
ResolvedIDData.push({
    key: i,
    value: `12345`,
    comments: "",
    source: `man_id`,
    event: "",
    date: "03/08/2022",
  });
};
const ScreenResolutionData = [];
for (let i = 0; i < 6; i++) {
ScreenResolutionData.push({
    key: i,
    value: `12345`,
    comments: "",
    source: `man_id`,
    event: "",
    date: "03/08/2022",
  });
};
const Sha1SimSerialNumberData = [];
for (let i = 0; i < 6; i++) {
Sha1SimSerialNumberData.push({
    key: i,
    value: `12345`,
    comments: "",
    source: `man_id`,
    event: "",
    date: "03/08/2022",
  });
};
const Sha1WifiMacData = [];
for (let i = 0; i < 6; i++) {
Sha1WifiMacData.push({
    key: i,
    value: `12345`,
    comments: "",
    source: `man_id`,
    event: "",
    date: "03/08/2022",
  });
};
const WaferIDData = [];
for (let i = 0; i < 6; i++) {
WaferIDData.push({
    key: i,
    value: `12345`,
    comments: "",
    source: `man_id`,
    event: "",
    date: "03/08/2022",
  });
};
//Emailfake data
const EmailData = [];
for (let i = 0; i < 6; i++) {
EmailData.push({
    key: i,
    value: `man_d`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
const EmailDomainData = [];
for (let i = 0; i < 3; i++) {
EmailDomainData.push({
    key: i,
    value: `123_d`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
const EmailTLDData = [];
for (let i = 0; i < 3; i++) {
EmailTLDData.push({
    key: i,
    value: `123_d`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
const EmailUserData = [];
for (let i = 0; i < 3; i++) {
EmailUserData.push({
    key: i,
    value: `123_d`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
//Financial table data
const CreditCardBINData = [];
for (let i = 0; i < 3; i++){
CreditCardBINData.push({
    key: i,
    value: `123_d`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
const CreditCardHashedData = [];
for (let i = 0; i < 3; i++){
CreditCardHashedData.push({
    key: i,
    value: `123_d`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
//Geo locationa table
const AddressInfoData = [];
for (let i = 0; i < 3; i++){
AddressInfoData.push({
    key: i,
    value: `123_d`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
const CityData = [];
for (let i = 0; i < 3; i++){
CityData.push({
    key: i,
    value: `123_d`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
const CompanyData = [];
for (let i = 0; i < 3; i++){
CompanyData.push({
    key: i,
    value: `123_d`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
const CountryCodeData = [];
for (let i = 0; i < 3; i++){
CountryCodeData.push({
    key: i,
    value: `123_d`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
const NameData = [];
for (let i = 0; i < 3; i++){
NameData.push({
    key: i,
    value: `123_d`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
const phoneData = [];
for (let i = 0; i < 3; i++){
phoneData.push({
    key: i,
    value: `123_d`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
const PostalCodeData = [];
for (let i = 0; i < 3; i++){
PostalCodeData.push({
    key: i,
    value: `123_d`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
const StateData = [];
for (let i = 0; i < 3; i++){
StateData.push({
    key: i,
    value: `123_d`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
const TimeZoneData = [];
for (let i = 0; i < 3; i++){
TimeZoneData.push({
    key: i,
    value: `123_d`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
//Show the Misc table
const LexicalData = [];
for (let i = 0; i < 3; i++){
LexicalData.push({
    key: i,
    value: `KVMNL_1`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
const OrganizationIDData = [];
for (let i = 0; i < 3; i++){
OrganizationIDData.push({
    key: i,
    value: `123_d`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
const PromationalCodeData = [];
for (let i = 0; i < 3; i++){
  PromationalCodeData.push({
    key: i,
    value: `c679i`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
const ShipMethodTypeData = [];
for (let i = 0; i < 3; i++){
ShipMethodTypeData.push({
    key: i,
    value: `3rd Day`,
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
const SpeciallyPurchaseData = [];
for (let i = 0; i < 3; i++){
SpeciallyPurchaseData.push({
    key: i,
    value: 'hiol',
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
//show username table
const EncrptedPasswordData = [];
for (let i = 0; i < 3; i++){
EncrptedPasswordData.push({
    key: i,
    value: 'cds',
    comments: "1238",
    source: `test_1`,
    event: "",
    date: "03/01/2021",
  });
};
const mothersMaidenNameData = [];
for (let i = 0; i < 8; i++){
mothersMaidenNameData.push({
    key: i,
    value: 'newentry123',
    comments: "",
    source: `man_id`,
    event: "",
    date: "03/01/2021",
  });
};
const SSNTaxIDData = [];
for (let i = 0; i < 3; i++){
SSNTaxIDData.push({
    key: i,
    value: '123@',
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
const UserAccountData = [];
for (let i = 0; i < 3; i++){
UserAccountData.push({
    key: i,
    value: '12www445',
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
const UserCookieData = [];
for (let i = 0; i < 3; i++){
UserCookieData.push({
    key: i,
    value: 'userFont=Queens Gypfspd; userGuid=DB1094E0-4F89-11D3-9A0C-0305E82C3301; userLocale=en-CA',
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};const UsernameData = [];
for (let i = 0; i < 3; i++){
UsernameData.push({
    key: i,
    value: 'man_d',
    comments: "",
    source: `man_d`,
    event: "",
    date: "03/01/2021",
  });
};
const mostCommonItems = [
  { id: 1, text: "Address Info", value: 1, checked: true },
  { id: 2, text: "DeviceInsight Print", value: 2, checked: false },
  { id: 3, text: "Email", value: 3, checked: false },
  { id: 4, text: "Resolve ID", value: 4, checked: false },
  { id: 5, text: "User Account", value: 5, checked: false },
  { id: 6, text: "Username", value: 6, checked: false },
];
const acceptItems = [
  { id: 1, text: "Accept", value: 1, checked: false },
  { id: 2, text: "Accept Charset", value: 2, checked: false },
  { id: 3, text: "Accept Encoding", value: 3, checked: false },
  { id: 4, text: "Accept Language Code", value: 4, checked: false },
  { id: 5, text: "User Agent", value: 5, checked: false },
  { id: 6, text: "User Agent OS", value: 6, checked: false },
  { id: 7, text: "User Agent Type", value: 6, checked: false },
];
const customItems = [{ id: 1, text: "PHONE", value: 1, checked: false }];
const deviceItems = [
  { id: 1, text: "Android ID", value: 1, checked: false },
  { id: 2, text: "Device Carrier Name", value: 2, checked: false },
  { id: 3, text: "Device Name", value: 3, checked: false },
  { id: 4, text: "deviceInsight Print", value: 4, checked: false },
  { id: 5, text: "Device Type", value: 5, checked: false },
  { id: 6, text: "Device Type Keyword", value: 6, checked: false },
  { id: 7, text: "IP", value: 6, checked: false },
  { id: 8, text: "IP Address C Block", value: 1, checked: false },
  { id: 9, text: "ISP Name", value: 2, checked: false },
  { id: 10, text: "Language", value: 3, checked: false },
  { id: 11, text: "Mobile Device ID", value: 4, checked: false },
  { id: 12, text: "Navigator Platform", value: 5, checked: false },
  { id: 13, text: "Resolved ID", value: 6, checked: false },
  { id: 14, text: "Screen Resolution", value: 6, checked: false },
  { id: 15, text: "Sha 1 Sim Serial Number", value: 5, checked: false },
  { id: 16, text: "Sha 1 Wifi Mac", value: 6, checked: false },
  { id: 17, text: "Wafer ID", value: 6, checked: false },
];
const emailItems = [
  { id: 1, text: "Email", value: 1, checked: false },
  { id: 2, text: "Email Domain", value: 2, checked: false },
  { id: 3, text: "Email TLD", value: 3, checked: false },
  { id: 4, text: "Email User", value: 4, checked: false },
];
const financialItems = [
  { id: 1, text: "Credit Card BIN", value: 1, checked: false },
  { id: 2, text: "Credit Card Hashed", value: 2, checked: false },
  { id: 3, text: "Credit Card Type", value: 3, checked: false },
  { id: 4, text: "Financial Account Number", value: 4, checked: false },
  { id: 5, text: "Payment Subtype", value: 5, checked: false },
  { id: 6, text: "Payment Type", value: 6, checked: false },
  { id: 7, text: "Routing Number", value: 6, checked: false },
];
const geolcationItems = [
  { id: 1, text: "Address Info", value: 1, checked: false },
  { id: 2, text: "City", value: 2, checked: false },
  { id: 3, text: "Company", value: 3, checked: false },
  { id: 4, text: "Country code", value: 4, checked: false },
  { id: 5, text: "Name", value: 5, checked: false },
  { id: 6, text: "Postal Code", value: 6, checked: false },
  { id: 7, text: "State", value: 6, checked: false },
  { id: 8, text: "Time Zone", value: 6, checked: false },
];
const miscItems = [
  { id: 1, text: "Lexical", value: 1, checked: false },
  { id: 2, text: "Organization ID", value: 2, checked: false },
  { id: 3, text: "Promatonal Code", value: 3, checked: false },
  { id: 4, text: "Ship Method Type", value: 4, checked: false },
  { id: 5, text: "Specialty Purchase", value: 5, checked: false },
];
const userItems = [
  { id: 1, text: "Encrpted Password", value: 1, checked: false },
  { id: 2, text: "mothers Maiden Name", value: 2, checked: false },
  { id: 3, text: "SSN Tax ID", value: 3, checked: false },
  { id: 4, text: "User Account", value: 4, checked: false },
  { id: 5, text: "User Cookie", value: 5, checked: false },
  { id: 6, text: "Username", value: 5, checked: false },
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
  acceptItems,
  customItems,
  deviceItems,
  emailItems,
  financialItems,
  geolcationItems,
  miscItems,
  userItems,
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
  UsernameData
};
