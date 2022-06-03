import React from 'react';
const UserSelectDropDown = ({ onChange, currentSelectValue }) => {
  const tech = ['java', 'c', 'react', 'node'];
  return (
    <>
      <select
        showArrow={false}
        // defaultValue={[{ id: 1, label: 'PosNeg Lists', value: 1 }]}
        name="pathName"
        id="pathSelector"
        style={{ width: 300, margin: '1em' }}
        // options={mainOptionsList}
        className="defSelect"
        value={currentSelectValue}
        onChange={handleOnChange}
      >
        {mainOptionsList.map((name) => {
          return <option value={name.value}>{name.label}</option>;
        })}
      </select>
      ;
    </>
  );
};

export default UserSelectDropDown;
