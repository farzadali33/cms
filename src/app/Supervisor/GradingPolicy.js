import React, { Component } from "react";
import { Form } from "react-bootstrap";

export class GradingPolicy extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Grading Policy </h3>
        </div>

        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <form className="form-sample">
                  <div className="row">
                    <div className="col-md-8">
                      <Form.Group className="row">
                        <label className="col-sm-5 col-form-label">
                          Select Batch to view Grading Policy
                        </label>
                        <div className="col-sm-5">
                          <select className="form-control">
                            <option>Fall 2020</option>
                            <option>Fall 2019</option>
                            <option>Fall 2018</option>
                            <option>Fall 2017</option>
                            <option>Fall 2016</option>
                            <option>Fall 2015</option>
                            <option>Fall 2014</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-sm-5"></div>
                        <div className="col-sm-5">
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
                <h4 className="card-title">
                  Grading Policy of Fall 2007 to Fall 2018
                </h4>
                <br />
                <div className="table-responsive">
                  <table className="table table-bordered text-center">
                    <thead>
                      <tr className="bluee">
                        <th>
                          <b> Percent Marks </b>
                        </th>
                        <th>
                          <b> Letter Grade </b>
                        </th>
                        <th>
                          <b> Grade Point </b>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 0 - 49 </td>
                        <td> F </td>
                        <td> 0.00 </td>
                      </tr>
                      <tr>
                        <td> 50 - 54 </td>
                        <td> D </td>
                        <td> 1.00 </td>
                      </tr>
                      <tr>
                        <td> 55 - 57 </td>
                        <td> C- </td>
                        <td> 1.70 </td>
                      </tr>
                      <tr>
                        <td> 58 - 60 </td>
                        <td> C </td>
                        <td> 2.00 </td>
                      </tr>
                      <tr>
                        <td> 61 - 64 </td>
                        <td> C+ </td>
                        <td> 2.30 </td>
                      </tr>
                      <tr>
                        <td> 65 - 69 </td>
                        <td> B- </td>
                        <td> 2.70 </td>
                      </tr>
                      <tr>
                        <td> 70 - 74 </td>
                        <td> B </td>
                        <td> 3.00 </td>
                      </tr>
                      <tr>
                        <td> 75 - 79 </td>
                        <td> B+ </td>
                        <td> 3.30 </td>
                      </tr>
                      <tr>
                        <td> 80 - 84 </td>
                        <td> A- </td>
                        <td> 3.70 </td>
                      </tr>
                      <tr>
                        <td> 85 - 100 </td>
                        <td> A </td>
                        <td> 4.00 </td>
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

export default GradingPolicy;
