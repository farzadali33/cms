import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { getStudents } from "../../actions/Student";

import axios from "axios";

export class Attendance extends Component {
  state = { students: [] };
  componentDidMount() {
    getStudents().then((res) => {
      console.log(res);
      const data = res.data;
      this.setState({ students: data });
    });
    // axios.get("http://localhost:3001/CMSController/Students").then((res) => {
    //   const data = res.data;
    //   console.log(data);
    //   this.setState({ students: data });
    // });
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Student Attendance </h3>
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
                          <b> Course </b>
                        </th>
                        <th>
                          <b> Batch </b>
                        </th>
                        <th>
                          <b> Teacher </b>
                        </th>
                        <th>
                          <b> Section </b>
                        </th>
                        <th>
                          <b> Total Lectures Till Now </b>
                        </th>
                        <th>
                          <b> Attendance </b>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.students.map((student) =>
                        student.currentSemesterSubjectsInfo.map((obj) => (
                          <tr>
                            <td>{obj.subject.title}</td>
                            <td>{student.session}</td>
                            <td>{obj.instructor}</td>
                            <td>{student._class}</td>
                            <td>10</td>
                          </tr>
                        ))
                      )}
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

export default Attendance;
