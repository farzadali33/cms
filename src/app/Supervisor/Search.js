import React, { Component } from "react";
import ApplicationLinks from "./application-links/ApplicationLinks";

export class Search extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Search Criteria </h3>
        </div>
        <div>
          <ApplicationLinks />
        </div>
      </div>
    );
  }
}

export default Search;
