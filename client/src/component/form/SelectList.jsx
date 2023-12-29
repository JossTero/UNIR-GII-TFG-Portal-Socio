import React, { useState } from 'react';

function SelectList({ datas, label, action }) {
  const [item, setItem] = useState(datas[0]);
  const [toggle, setToggle] = useState(false);
  const handler = (e, value) => {
    if (action) {
      action(value);
    }
    setItem(value);
    setToggle(!toggle);
  };
  return (
    <div className="col-lg-3 col-md-6 col-12">
      {/* <!-- Single Filter --> */}
      <div className="crancy-table-filter__single crancy-table-filter__location">
        <label htmlFor="crancy-table-filter__label">{label}</label>
        <select
          className="select-input"
          name="company_name"
          id="company"
          defaultValue="company"
        >
          {datas.map((data) => (
            <option
              className={item.value === data.value ? 'selected' : ''}
              key={label + data.value}
              onClick={(e) => handler(e, data.value)}
            >
              {data.description}
            </option>
          ))}
        </select>
      </div>
      {/* <!-- End Single Filter --> */}
    </div>
  );
}

export default SelectList;
