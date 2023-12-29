import React, { useEffect } from "react";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world.js";
import SelectInput from "../form/SelectInput";

function SidebarMap() {
  var markers = [
    {
      name: "Bangladesh",
      coords: [24, 90],
    },
    {
      name: "Canada",
      coords: [56, -106],
    },
    {
      name: "Egypt",
      coords: [27, 30],
    },
    {
      name: "United States",
      coords: [38, -97],
    },
  ];
  let map = undefined;
  useEffect(() => {
    if (map === undefined) {
      map = new jsVectorMap({
        map: "world",
        markers: markers,
        markerStyle: {
          initial: {
            fill: "#0A82FD",
            r: 4,
          },
        },
        selector: "#world-map",
        backgroundColor: "transparent",
        // panControl: false,
        zoomButtons: false,
        zoomControl: false,
        regionStyle: {
          initial: {
            fill: "#DDEDFF",
          },
          hover: {
            fill: "#0A82FD",
          },
        },
        showTooltip: true,
      });
    }
  }, []);
  return (
    <div className="col-xxl-12 col-lg-4 col-12 mg-top-30">
      {/* <!-- Charts One --> */}
      <div className="charts-main charts-home-four">
        {/* <!-- Top Heading --> */}
        <div className="charts-main__heading  mg-btm-20">
          <h3 className="crancy-sidebar__title m-0">Traffic by Country</h3>
          <SelectInput
            options={[" Last 7 Days", " Last 15 Days", "Last Month"]}
          />
        </div>
        <div className="charts-main__one">
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="crancy-chart__country"
              role="tabpanel"
              aria-labelledby="crancy-chart__country"
            >
              <div className="crancy-vector-map">
                <div id="world-map"></div>
              </div>
              <div className="mg-top-20 crancy-progress-list--group">
                <ul className="crancy-progress-list crancy-progress-list__space crancy-progress-list__inline">
                  <li>
                    <span className="crancy-progress-list__color crancy-color1__bg"></span>
                    <p>
                      <span>USA</span> <b>:</b> 35%
                    </p>
                  </li>
                  <li>
                    <span className="crancy-progress-list__color crancy-color9__bg"></span>
                    <p>
                      <span>Canda</span> <b>:</b> 29%
                    </p>
                  </li>
                </ul>
                <ul className="crancy-progress-list crancy-progress-list__space crancy-progress-list__inline">
                  <li>
                    <span className="crancy-progress-list__color crancy-color8__bg"></span>
                    <p>
                      <span>Egypt</span> <b>:</b> 22%
                    </p>
                  </li>
                  <li>
                    <span className="crancy-progress-list__color crancy-color7__bg"></span>
                    <p>
                      <span>Bangladesh</span> <b>:</b> 14%
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Charts One --> */}
    </div>
  );
}

export default SidebarMap;
