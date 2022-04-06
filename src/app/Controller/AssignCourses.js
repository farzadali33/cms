import React, { Component } from "react";
import { Form } from "react-bootstrap";

export class AssignCourses extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Assign Courses to Faculty Members </h3>
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
                          Faculty Members
                        </label>
                        <div className="col-sm-8">
                          <select className="form-control">
                            <option>Abdul Mateen</option>
                            <option>Asim Rasul</option>
                            <option>Wasim Ahmad Khan</option>
                            <option>Omer Nawaz</option>
                            <option>Faisal Bukhari</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">
                          Courses
                        </label>
                        <div className="col-sm-8">
                          <select className="form-control">
                            <option>Operating Systems</option>
                            <option>Artificial Intelligence</option>
                            <option>Compiler Construction</option>
                            <option>Computer Vision</option>
                            <option>Project Management</option>
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
                            Add Course
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

export default AssignCourses;
