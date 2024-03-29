import React, { useState, useEffect } from 'react';
import TaskCard from '../../../component/cards/TaskCard';
import { usePartner } from '../../../context/partnerContext';

function Projects() {
  const { announcements, getAnnouncements } = usePartner();

  useEffect(() => {
    getAnnouncements();
  }, []);

  const [page, setPage] = useState(1);
  const [show, setShow] = useState(2);

  return (
    <div
      className="tab-pane fade show active"
      id="tab_3"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      {/* <!-- Task Area --> */}
      <div className="crancy-taskarea mg-top-30">
        <h3 className="crancy-table__title mb-0">Noticias de interés</h3>
        <div className="row">
          {announcements?.map((announcement, index) => {
            const current = page * show;
            const previous = current - show;
            if (previous > 0 && index + 1 > previous && index + 1 <= current) {
              return (
                <TaskCard announcement={announcement} key={announcement?._id} />
              );
            } else if (page == 1) {
              return (
                index < page * show && (
                  <TaskCard
                    announcement={announcement}
                    key={announcement?._id}
                  />
                )
              );
            }
          })}
        </div>
        <div className="crancy-table-bottom">
          <div id="crancy-table__main_filter" className="dataTables_filter">
            <label>
              Buscar:
              <input
                type="search"
                className="form-control form-control-sm"
                placeholder=""
                aria-controls="crancy-table__main"
              />
            </label>
          </div>
          <div className="dataTables_length" id="crancy-table__main_length">
            <label>
              Mostrar resultado:
              <select
                name="crancy-table__main_length"
                aria-controls="crancy-table__main"
                className="form-select form-select-sm"
                onChange={(e) => setShow(e.target.value)}
                defaultValue={2}
              >
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </label>
          </div>
          <div
            className="dataTables_paginate paging_simple_numbers"
            id="crancy-table__main_paginate"
          >
            <ul className="pagination">
              <li
                className={`paginate_button page-item previous ${
                  page === 1 ? 'disabled' : ''
                }`}
                id="crancy-table__main_previous"
                onClick={() => page > 1 && setPage(page - 1)}
              >
                <a
                  aria-controls="crancy-table__main"
                  data-dt-idx="previous"
                  tabIndex="0"
                  className="page-link"
                >
                  <i className="fas fa-angle-left"></i>
                </a>
              </li>
              {Array.from(
                Array(Math.ceil(announcements.length / show)).keys('n')
              ).map((id, index) => (
                <li
                  className={`paginate_button page-item ${
                    page === index + 1 ? 'active' : ''
                  }`}
                  onClick={() => setPage(index + 1)}
                  key={index + 'key'}
                >
                  <a
                    aria-controls="crancy-table__main"
                    data-dt-idx="0"
                    tabIndex="0"
                    className="page-link"
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
              <li
                className={`paginate_button page-item next ${
                  page === announcements.length % show < 1 ? 'disabled' : ''
                }`}
                id="crancy-table__main_next"
                onClick={() =>
                  page < Math.ceil(announcements.length / show) &&
                  setPage(page + 1)
                }
              >
                <a
                  aria-controls="crancy-table__main"
                  data-dt-idx="next"
                  tabIndex="0"
                  className="page-link"
                >
                  <i className="fas fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- End crancy Table --> */}
      </div>
      {/* <!-- End Task Area --> */}
    </div>
  );
}

export default Projects;
