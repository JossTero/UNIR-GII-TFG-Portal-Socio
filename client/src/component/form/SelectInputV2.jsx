import React from "react";

function SelectInputV2() {
  return (
    <div className="col-lg-3 col-md-6 col-12">
      {/* <!-- Single Filter --> */}
      <div className="crancy-table-filter__single crancy-table-filter__location">
        <label htmlFor="crancy-table-filter__label">Location</label>
        <select
          className="select-input"
          name="company_name"
          id="company"
          defaultValue="company"
        >
          <option value="company">State or Province</option>
          <option value="1">New York</option>
          <option value="2">Sydney</option>
          <option value="3">Dhaka</option>
          <option value="4">Victoria</option>
        </select>
      </div>
      {/* <!-- End Single Filter --> */}
    </div>
  );
}

export default SelectInputV2;
