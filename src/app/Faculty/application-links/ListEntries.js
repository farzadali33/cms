import React, { Component } from "react";
import ApplicationLinks from "./ApplicationLinks";

export class ListEntries extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Gradebook List Entries</h3>
          <ApplicationLinks />
        </div>

        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div>
                  <h4>
                    <u>LAB (100)</u>
                  </h4>
                  <br />
                </div>

                <div>
                  <h4>
                    <u>MID (35)</u>
                  </h4>
                  <div>
                    <p>Mid (35) 100.00%</p>
                    <h6>Total % used: 100%</h6>
                  </div>
                  <br />
                </div>

                <div>
                  <h4>
                    <u>FINAL (40)</u>
                  </h4>
                  <div>
                    <p>Final (40) 100.00%</p>
                    <h6>Total % used: 100%</h6>
                  </div>
                  <br />
                </div>

                <div>
                  <h4>
                    <u>SESSIONAL (25)</u>
                  </h4>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListEntries;
