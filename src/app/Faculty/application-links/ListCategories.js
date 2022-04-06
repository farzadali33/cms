import React, { Component } from "react";
import ApplicationLinks from "./ApplicationLinks";

export class ListCategories extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Gradebook List Categories</h3>
          <ApplicationLinks />
        </div>

        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr className="bluee">
                        <th>
                          <b>Category Name</b>
                        </th>
                        <th>
                          <b> Marks Weightage </b>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b>Mid</b>
                        </td>
                        <td> 35% </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Final</b>
                        </td>

                        <td> 40% </td>
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

export default ListCategories;
