import React, { Component } from "react";

export class DropCourseRequest extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Drop Course Requests </h3>
        </div>

        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table text-center">
                    <thead>
                      <tr className="bluee">
                        <th>
                          <b> Sr# </b>
                        </th>
                        <th>
                          <b> Roll Number </b>
                        </th>
                        <th>
                          <b> Student Name </b>
                        </th>
                        <th>
                          <b> Course Name </b>
                        </th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td> BCSF18M527 </td>
                        <td> Sumita Zahra </td>
                        <td> Operating System </td>
                        <td>
                          <a href="#">Accept</a>
                        </td>
                        <td>
                          <a href="#">Reject</a>
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> BCSF18M510 </td>
                        <td> Fatima Waheed </td>
                        <td> Calculus II </td>
                        <td>
                          <a href="#">Accept</a>
                        </td>
                        <td>
                          <a href="#">Reject</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DropCourseRequest;
