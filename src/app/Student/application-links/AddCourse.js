import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { getStudents } from "../../../actions/Student";

export class AddSubject extends Component {
  state = { students: [] };
  componentDidMount() {
    getStudents().then((res) => {
      console.log(res);
      const data = res.data;
      this.setState({ students: data });
    });
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Add Course </h3>
        </div>
        <p> You have to wait for the approval of your request.</p>

        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <form className="form-sample">
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          Course Name
                        </label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            {this.state.students.map((student) =>
                              student.currentSemesterSubjectsInfo.map((obj) => (
                                <option>{obj.subject.title}</option>
                              ))
                            )}
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-9">
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

export default AddSubject;
