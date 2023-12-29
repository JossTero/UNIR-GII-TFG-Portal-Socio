import React, { useState, useEffect } from 'react';
import { usePartner } from '../../context/partnerContext';
import SingleOrder from '../cards/SingleOrder';
import SelectList from '../form/SelectList';

function ActivitySection({ className }) {
  const { memberships, getMembershipFees } = usePartner();

  useEffect(() => {
    getMembershipFees();
  }, [memberships]);

  const [page, setPage] = useState(1);
  const [show, setShow] = useState(4);

  return (
    <div className={`${className ? className : 'crancy-table'} mg-top-30`}>
      <div className="crancy-table__heading">
        <h3 className="crancy-table__title mb-0">Cuotas del socio</h3>
      </div>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="table_1"
          role="tabpanel"
          aria-labelledby="table_1"
        >
          {/* <!-- Table Filter --> */}
          <div className="crancy-table-filter mg-btm-20">
            <div className="row">
              <SelectList
                datas={[
                  { value: '', description: 'Tipo de cuota' },
                  { value: 'EXTR', description: 'Ordinaria' },
                  { value: 'ORDI', description: 'Extraordinaria' },
                ]}
                label={'Tipo'}
              />
              <SelectList
                datas={[
                  { value: '', description: 'Medio de pago' },
                  { value: 'EFEC', description: 'Efectivo' },
                  { value: 'BANC', description: 'Bancario' },
                ]}
                label={'Medio de pago'}
              />
              <SelectList
                datas={[
                  { value: '', description: 'Estado' },
                  { value: 'PECO', description: 'Pendiente de cobro' },
                  { value: 'COBR', description: 'Cobrado' },
                  { value: 'ANUL', description: 'Anulado' },
                ]}
                label={'Estado'}
              />
            </div>
          </div>
          {/* <!-- End Table Filter --> */}

          {/* <!-- crancy Table --> */}
          <table
            id="crancy-table__main"
            className="crancy-table__main crancy-table__main-v1"
          >
            {/* <!-- crancy Table Head --> */}
            <thead className="crancy-table__head">
              <tr>
                <th className="crancy-table__column-1 crancy-table__h1">
                  Nº de cuota
                </th>
                <th className="crancy-table__column-2 crancy-table__h2">
                  Tipo
                </th>
                <th className="crancy-table__column-3 crancy-table__h3">
                  Periodo
                </th>
                <th className="crancy-table__column-4 crancy-table__h4">
                  Efecto
                </th>
                <th className="crancy-table__column-5 crancy-table__h5">
                  Vencimiento
                </th>
                <th className="crancy-table__column-6 crancy-table__h6">
                  Importe
                </th>
                <th className="crancy-table__column-7 crancy-table__h7">
                  Medio de pago
                </th>
                <th className="crancy-table__column-8 crancy-table__h8">
                  Estado
                </th>
                <th className="crancy-table__column-9 crancy-table__h9">
                  Acciones
                </th>
              </tr>
            </thead>
            {/* <!-- crancy Table Body --> */}
            <tbody className="crancy-table__body">
              {memberships?.map((membership, index) => {
                const current = page * show;
                const previous = current - show;
                if (
                  previous > 0 &&
                  index + 1 > previous &&
                  index + 1 <= current
                ) {
                  return <SingleOrder membership={membership} key={index} />;
                } else if (page == 1) {
                  return (
                    index < page * show && (
                      <SingleOrder membership={membership} key={index} />
                    )
                  );
                }
              })}
            </tbody>
            {/* <!-- End crancy Table Body --> */}
          </table>
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
                  defaultValue={4}
                >
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
                  Array(Math.ceil(memberships.length / show)).keys('n')
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
                    page === memberships.length % show < 1 ? 'disabled' : ''
                  }`}
                  id="crancy-table__main_next"
                  onClick={() =>
                    page < Math.ceil(memberships.length / show) &&
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
      </div>
    </div>
  );
}

export default ActivitySection;
