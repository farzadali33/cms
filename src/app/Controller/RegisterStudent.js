import React, { Component } from "react";
import { Form } from "react-bootstrap";

export class RegisterStudent extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Register Students in the Course </h3>
        </div>

        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <form className="form-sample">
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">
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
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">Batch</label>
                        <div className="col-sm-8">
                          <select className="form-control">
                            <option>Fall 2021</option>
                            <option>Fall 2020</option>
                            <option>Fall 2019</option>
                            <option>Fall 2018</option>
                            <option>Fall 2017</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">
                          Course
                        </label>
                        <div className="col-sm-8">
                          <select className="form-control">
                            <option>Operating System</option>
                            <option>Mobile Computing</option>
                            <option>Project Management</option>
                            <option>Calculus I</option>
                            <option>Computer Architecture</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-8">
                          <button type="button" className="btn bluee">
                            Register
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
      </div>
    );
  }
}

export default RegisterStudent;
