import React, { Component } from "react";

export class RegisterFaculty extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Register/UnRegister Faculty Members as Degree Supervisors
          </h3>
        </div>

        <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="font-weight-bold">
                          <h5>
                            <b>Degree Supervisors</b>
                          </h5>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Muhammad Idrees</td>
                        <td>
                          <a href="">Remove</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Abdul Mateen</td>
                        <td>
                          <a href="">Remove</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Ejaz Ashraf</td>
                        <td>
                          <a href="">Remove</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <br />
                    <button type="button" className="btn bluee">
                      Add Degree Supervisor
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

export default RegisterFaculty;
