import React, { Component } from "react";

import { Form } from "react-bootstrap";

export class Transcript extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> View Student Transcript </h3>
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
      </div>
    );
  }
}

export default Transcript;
