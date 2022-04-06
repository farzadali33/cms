import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

export class ApplicationLinks extends Component {
  render() {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <Link className="nav-link" to="/supervisor/search/byprobation">
              <li className="breadcrumb-item">
                <Trans>Search Students on Probation</Trans>
              </li>
            </Link>

            <Link className="nav-link" to="/supervisor/search/bysubjectgrade">
              <li className="breadcrumb-item">
                <Trans>Search Specific Subject Grades</Trans>
              </li>
            </Link>

            <Link className="nav-link" to="/supervisor/search/bystudentgrade">
              <li className="breadcrumb-item">
                <Trans>Search Specific Student Grades</Trans>
              </li>
            </Link>

            <Link className="nav-link" to="/supervisor/search/bycgpa">
              <li className="breadcrumb-item">
                <Trans>Search Students By CGPA</Trans>
              </li>
            </Link>
          </ol>
        </nav>
      </div>
    );
  }
}

export default ApplicationLinks;
