import React, { Component } from "react";
import { Form } from "react-bootstrap";
import ApplicationLinks from "./ApplicationLinks";

export class BySubjectGrade extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Search Criteria </h3>
        </div>
        <div>
          <ApplicationLinks />
        </div>

        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4>Search Specfic Subject Grades</h4>
                <br />
                <form className="form-sample">
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          Degree
                        </label>
                        <div className="col-sm-8">
                          <select className="form-control">
                            <option>BS(CS)</option>
                            <option>BS(SE)</option>
                            <option>BS(IT)</option>
                            <option>BS(DS)</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          Course Title
                        </label>
                        <div className="col-sm-8">
                          <select className="form-control">
                            <option>Operating Systems</option>
                            <option>Database Systems</option>
                            <option>Mobile Computing</option>
                            <option>Calculus II</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          Grades
                        </label>
                        <div className="col-sm-8">
                          <select className="form-control">
                            <option>A</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B</option>
                            <option>B-</option>
                            <option>C+</option>
                            <option>C</option>
                            <option>C-</option>
                            <option>D</option>
                            <option>F</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          Campus
                        </label>
                        <div className="col-md-8">
                          <Form.Group>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  name="optionsRadios"
                                  id="optionsRadios1"
                                  value=""
                                />
                                <i className="input-helper"></i>
                                New
                              </label>
                            </div>

                            <div className="form-check">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  name="optionsRadios"
                                  id="optionsRadios2"
                                  value="option2"
                                />
                                <i className="input-helper"></i>
                                Old
                              </label>
                            </div>
                          </Form.Group>
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-8">
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
                          <b> Roll Number </b>
                        </th>
                        <th>
                          <b> Student Name </b>
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

export default BySubjectGrade;
