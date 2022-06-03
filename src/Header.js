import React, { Component, useState } from "react";
import Select from "react-select";
import {
  domainTypeList,
  mainOptionsList,
  orgList,
  posNegList,
} from "./optionsList";
import './custom.css';


const PrimaryHeader = (props) => {
  const { handleOnChange, currentSelectValue, search, entryForm } = props;
  const tech = ["java", "c", "react", "node"];
  return (
    <div className="row">
      <div className="col-xl-3 col-lg-3">
        <Select className="mainSelect mt-4 ml-3"
         options={mainOptionsList} 
         defaultValue={currentSelectValue}
         value={currentSelectValue}
         onChange={(e)=>handleOnChange(e)} />
        {/* <select
          showArrow={false}
          // defaultValue={[{ id: 1, label: 'PosNeg Lists', value: 1 }]}
          name="pathName"
          id="pathSelector"
          style={{ width: 300, margin: '1em' }}
          // options={mainOptionsList}
          className="defSelect"
          value={{id:9,label:"ffff", value:22}}
          onChange={handleOnChange}
        >
          {mainOptionsList.map((name) => {
            return <option value={name.value}>{name.label}</option>;
          })}
        </select> */}
      </div>
      <div className="col-xl-9 col-lg-9">
        <label
          className="advSearchLabel"
          title="Advanced Search"
          onClick={search}
        >
          {"Advanced search"}
        </label>
        <input className="searchBar" />
        <button className="btn btn-primary btn-sm">
          
          {/* <i class="fa fa-search" aria-hidden="true"></i> */} {"Search"}
        </button>
        <button
          type="button"
          class="btn btn-success btn-sm entryLabel"
          onClick={entryForm}
        >
          {" New Entry"}
        </button>
      </div>
    </div>
  );
};
export default PrimaryHeader;
