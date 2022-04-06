import React, { Component } from "react";
import { Form } from "react-bootstrap";
import ApplicationLinks from "./ApplicationLinks";

export class AddCategory extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Gradebook Add Category </h3>
          <ApplicationLinks />
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
                          Sub Category
                        </label>
                        <div className="col-sm-8">
                          <select className="form-control">
                            <option>Pakistan</option>
                            <option>America</option>
                            <option>Italy</option>
                            <option>Russia</option>
                            <option>Britain</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">
                          Weightage
                        </label>
                        <div className="col-sm-8">
                          <Form.Control type="text" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">
                          Main Category
                        </label>
                        <div className="col-sm-8">
                          <Form.Control type="text" />
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
                            Save
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

export default AddCategory;
