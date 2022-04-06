import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getStudents } from "../../actions/Student";
export class Dashboard extends Component {
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
        <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-sm-flex align-items-center mb-4">
                  <h5 className="card-title mb-sm-0">Courses</h5>
                </div>
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      {this.state.students.map((student) =>
                        student.currentSemesterSubjectsInfo.map((course) => (
                          <tr>
                            <td className="font-weight-bold">
                              {course.subject.title}
                            </td>
                            <td>
                              <a
                                href={`/student/gradebook/${course.subject._id}`}
                              >
                                Gradebook
                              </a>
                            </td>
                            <td>
                              <Link to="www.google.com">Attendance</Link>
                            </td>
                            <td>
                              <Link to="www.google.com">Announcements</Link>
                            </td>
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

export default Dashboard;
