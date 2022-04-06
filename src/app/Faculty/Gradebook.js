import React, { Component } from "react";
import ApplicationLinks from "./application-links/ApplicationLinks";

export class Gradebook extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Gradebook</h3>
          <ApplicationLinks />
        </div>

        <div>
          <h5>Class: BS(IT) Fall 2019 Morning AN</h5>
          <h5>Course: Operating System</h5>
          <br />
        </div>

        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr className="bluee">
                        <th>
                          <b> Roll Number - Name</b>
                        </th>
                        <th>
                          <b> Mid </b>
                        </th>
                        <th>
                          <b>Final</b>
                        </th>
                        <th>
                          <b> Total </b>
                        </th>
                        <th>
                          <b> Grade </b>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b> BCSF18M510 - Fatima Waheed</b>
                        </td>

                        <td> 30 </td>
                        <td> 32 </td>
                        <td>{30 + 32}</td>
                        <td>B</td>
                      </tr>
                      <tr>
                        <td>
                          <b> BCSF18M513 - Farzad Ali</b>
                        </td>

                        <td> 33 </td>
                        <td> 35 </td>
                        <td>{33 + 35}</td>
                        <td>A</td>
                      </tr>

                      <tr>
                        <td>
                          <b> BCSF18M527 - Sumita Zahra</b>
                        </td>

                        <td> 28 </td>
                        <td> 32 </td>
                        <td>{28 + 32}</td>
                        <td>B</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <br />

                <div className="row">
                  <div className="col-md-12">
                    <button type="button" className="btn bluee float-right">
                      Finalize Result
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gradebook;
