import React, { Component } from "react";
import { Form } from "react-bootstrap";

export class AcademicStatus extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Student Academic Status</h3>
        </div>

        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <form className="form-sample">
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          Enter Student Roll Number
                        </label>
                        <div className="col-sm-4">
                          <Form.Control type="text" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-4">
                          <button type="button" className="btn bluee">
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h5>Roll No: BCSF18M513</h5>
                <h5>Name: Farzad Ali</h5>
                <br />
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr className="bluee">
                        <th>
                          <b> Semester 01 </b>
                        </th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> MA-101 </td>
                        <td> Calculus-I </td>
                        <td>
                          <label className="badge badge-success">Pass</label>
                        </td>
                      </tr>
                      <tr>
                        <td> NS-103 </td>
                        <td> Electricity and Magnetism </td>
                        <td>
                          <label className="badge badge-primary">
                            Enrolled in current semester
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td> CMP-100 </td>
                        <td> Introduction to Computing </td>
                        <td>
                          <label className="badge badge-success">Pass</label>
                        </td>
                      </tr>
                      <tr>
                        <td> MA-120 </td>
                        <td> Probability and Statistics </td>
                        <td>
                          <label className="badge badge-danger">
                            Fail/Withdraw
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td> EN-101 </td>
                        <td> Writing Workshop </td>
                        <td>
                          <label className="badge badge-dark">
                            Not Attempted
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr className="bluee">
                        <th>
                          <b> Semester 02 </b>
                        </th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> MA-101 </td>
                        <td> Calculus-I </td>
                        <td>
                          <label className="badge badge-success">Pass</label>
                        </td>
                      </tr>
                      <tr>
                        <td> NS-103 </td>
                        <td> Electricity and Magnetism </td>
                        <td>
                          <label className="badge badge-primary">
                            Enrolled in current semester
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td> CMP-100 </td>
                        <td> Introduction to Computing </td>
                        <td>
                          <label className="badge badge-success">Pass</label>
                        </td>
                      </tr>
                      <tr>
                        <td> MA-120 </td>
                        <td> Probability and Statistics </td>
                        <td>
                          <label className="badge badge-danger">
                            Fail/Withdraw
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td> EN-101 </td>
                        <td> Writing Workshop </td>
                        <td>
                          <label className="badge badge-dark">
                            Not Attempted
                          </label>
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

export default AcademicStatus;
