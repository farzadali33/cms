import React, { Component } from "react";
import { withRouter } from "react-router";

import { ProgressBar } from "react-bootstrap";
import { getStudents } from "../../actions/Student";

export class Gradebook extends Component {
  state = { students: [], subject: [] };

  componentDidMount() {
    const id = this.props.match.params.id;
    getStudents().then((res) => {
      const data = res.data;
      let sub = res.data[0].currentSemesterSubjectsInfo;

      sub = sub.filter((subj) => subj.subject._id === id);
      this.setState({ students: data, subject: sub });
      // console.log(this.state.subject);
    });
    // this.fetchData(id);
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Gradebook </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="!#" onClick={(event) => event.preventDefault()}>
                  Tables
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Basic tables
              </li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div>
                  <h6>
                    <b>Student: </b>
                    {this.state.students.map((student) => (
                      <>{student.name}</>
                    ))}
                  </h6>
                  <h6>
                    <b>Course: </b>
                    {this.state.subject.map((course) => (
                      <>{course.subject.title}</>
                    ))}
                  </h6>
                  <h6>
                    <b>Instructor: </b>
                    {this.state.subject.map((course) => (
                      <>{course.instructor}</>
                    ))}
                  </h6>
                  <br />
                </div>

                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr className="bluee">
                        <th>
                          <b> Title</b>
                        </th>
                        <th>
                          <b> Marks </b>
                        </th>
                        <th>
                          <b> Marks(100%)</b>
                        </th>
                        <th>
                          <b> Percentage </b>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="light-bluee">
                        <td>
                          <b> Mid </b>
                        </td>
                        {this.state.subject.map((course) => (
                          <>
                            <td>
                              <b>98/105</b>
                            </td>
                            <td>
                              <b>{course.mid}</b>
                            </td>
                            <td>
                              <ProgressBar
                                variant="danger"
                                now={(100 / 3) * 100}
                              />
                            </td>
                          </>
                        ))}
                      </tr>

                      <tr>
                        <td>Mid</td>
                        {this.state.subject.map((course) => (
                          <>
                            <td>98/105</td>
                            <td></td>
                            <td></td>
                          </>
                        ))}
                      </tr>

                      <tr className="light-bluee">
                        <td>
                          <b> Final </b>
                        </td>
                        {this.state.subject.map((course) => (
                          <>
                            <td>
                              <b>100/105</b>
                            </td>
                            <td>
                              <b>{course.final}</b>
                            </td>
                            <td>
                              <ProgressBar
                                variant="danger"
                                now={(100 / 3) * 100}
                              />
                            </td>
                          </>
                        ))}
                      </tr>

                      <tr>
                        <td>Final</td>
                        <td> 100/105 </td>
                        <td></td>
                        <td></td>
                      </tr>

                      <tr className="light-bluee">
                        <td>
                          <b> Quiz </b>
                        </td>
                        {this.state.subject.map((course) => (
                          <>
                            <td>
                              <b>204/270</b>
                            </td>
                            <td>
                              <b></b>
                            </td>
                            <td>
                              <ProgressBar variant="warning" now={57.4} />
                            </td>
                          </>
                        ))}
                      </tr>
                      <tr>
                        <td>Class Activity 1</td>
                        <td> 40/50 </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Test 1</td>
                        <td> 79/100 </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Class Activity 2</td>
                        <td> 8/10 </td>
                        <td></td>
                        <td></td>
                      </tr>

                      <tr className="light-bluee">
                        <td>
                          <b> Assignment</b>
                        </td>
                        <td>
                          <b>17/20</b>
                        </td>
                        <td> 1.03/5 </td>
                        <td>
                          <ProgressBar variant="primary" now={20.6} />
                        </td>
                      </tr>

                      <tr>
                        <td> Assignment 1 </td>
                        <td>7/10</td>
                        <td></td>
                        <td></td>
                      </tr>

                      <tr>
                        <td> Assignment 2 </td>
                        <td>10/10</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr className="bluee">
                        <th>
                          <b> Total Marks </b>
                        </th>
                        <th>
                          <b>
                            {this.state.subject.map((course) => (
                              <>{course.totalMarks}</>
                            ))}
                          </b>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bluee">
                        <td>
                          <b>Grade</b>
                        </td>
                        <td>
                          <b>
                            {this.state.subject.map((course) => (
                              <>{course.grade}</>
                            ))}
                          </b>
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

export default Gradebook;
