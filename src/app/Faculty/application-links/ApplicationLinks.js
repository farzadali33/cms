import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

export class ApplicationLinks extends Component {
  render() {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item nav-link">
              <b>
                <u>Application Links:</u>
              </b>
            </li>

            <Link className="nav-link" to="/faculty/gradebook">
              <li className="breadcrumb-item">
                <Trans>Gradebook Home</Trans>
              </li>
            </Link>

            <Link className="nav-link" to="/faculty/gradebook/listcategories">
              <li className="breadcrumb-item">
                <Trans>List Categories</Trans>
              </li>
            </Link>

            <Link className="nav-link" to="/faculty/gradebook/addcategory">
              <li className="breadcrumb-item">
                <Trans>Add Category</Trans>
              </li>
            </Link>

            <Link className="nav-link" to="/faculty/gradebook/listentries">
              <li className="breadcrumb-item">
                <Trans>List Entries</Trans>
              </li>
            </Link>

            <Link className="nav-link" to="/faculty/gradebook/addentry">
              <li className="breadcrumb-item">
                <Trans>Add Entry</Trans>
              </li>
            </Link>
          </ol>
        </nav>
      </div>
    );
  }
}

export default ApplicationLinks;
