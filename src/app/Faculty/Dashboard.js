import React, { Component } from "react";

export class Dashboard extends Component {
  state = {};

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
                      <tr>
                        <td className="font-weight-bold">
                          CMP-325 - Operating Systems BS IT Fall 2019 Morning AN
                        </td>
                        <td>
                          <a href="/faculty/gradebook">Gradebook</a>
                        </td>
                        <td>
                          <a href="www.google.com">Attendance</a>
                        </td>
                        <td>
                          <a href="www.google.com">Announcements</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">
                          CMP-325 - Operating Systems BS IT Fall 2019 Afternoon
                          AN
                        </td>
                        <td>
                          <a href="www.google.com">Gradebook</a>
                        </td>
                        <td>
                          <a href="www.google.com">Attendance</a>
                        </td>
                        <td>
                          <a href="www.google.com">Announcements</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">
                          CC-111-L - Object Oriented Programming BS CS Fall 2018
                          Morning AN
                        </td>
                        <td>
                          <a href="www.google.com">Gradebook</a>
                        </td>
                        <td>
                          <a href="www.google.com">Attendance</a>
                        </td>
                        <td>
                          <a href="www.google.com">Announcements</a>
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

export default Dashboard;
