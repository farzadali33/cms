import React, { Component } from "react";
import { Form } from "react-bootstrap";

export class Courses extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Courses </h3>
        </div>

        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <form className="form-sample">
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          Degree
                        </label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>BS(CS)</option>
                            <option>BS(SE)</option>
                            <option>BS(IT)</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
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
                <h4 className="card-title">Search Results</h4>
                <br />
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr className="bluee">
                        <th>
                          <b> Sr# </b>
                        </th>
                        <th>
                          <b> Course Name </b>
                        </th>
                        <th>
                          <b> Teacher </b>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
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

export default Courses;
