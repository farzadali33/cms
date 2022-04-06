import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Trans } from "react-i18next";
import { Collapse } from "react-bootstrap";

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach((i) => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(this.state).forEach((i) => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: "/apps", state: "appsMenuOpen" },
      { path: "/basic-ui", state: "basicUiMenuOpen" },
      { path: "/advanced-ui", state: "advancedUiMenuOpen" },
      { path: "/form-elements", state: "formElementsMenuOpen" },
      { path: "/tables", state: "tablesMenuOpen" },
      { path: "/maps", state: "mapsMenuOpen" },
      { path: "/icons", state: "iconsMenuOpen" },
      { path: "/charts", state: "chartsMenuOpen" },
      { path: "/user-pages", state: "userPagesMenuOpen" },
      { path: "/error-pages", state: "errorPagesMenuOpen" },
      { path: "/general-pages", state: "generalPagesMenuOpen" },
      { path: "/ecommerce", state: "ecommercePagesMenuOpen" },
    ];

    dropdownPaths.forEach((obj) => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true });
      }
    });
  }

  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item navbar-brand-mini-wrapper">
            <Link
              className="nav-link navbar-brand brand-logo-mini"
              to="/dashboard"
            >
              <img
                style={{ width: "50px" }}
                src={require("../../../assets/images/logo.png")}
                alt="logo"
              />
            </Link>
          </li>
          <li className="nav-item nav-profile">
            <a
              href="!#"
              className="nav-link"
              onClick={(evt) => evt.preventDefault()}
            >
              <div className="text-wrapper">
                <p className="profile-name">Muhammad Idrees</p>
                <p className="designation">
                  <Trans>Degree Supervisor</Trans>
                </p>
              </div>
            </a>
          </li>
          <li
            className={
              this.isPathActive("/supervisor/updateProfile")
                ? "nav-item active"
                : "nav-item"
            }
            style={{ height: "50px" }}
          >
            <Link className="nav-link" to="/supervisor/updateProfile">
              <span className="menu-title">
                <Trans>Update Profile</Trans>
              </span>
            </Link>
          </li>

          <li
            style={{ height: "50px" }}
            className={
              this.isPathActive("/supervisor/courses")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/supervisor/courses">
              <span className="menu-title">
                <Trans>Courses</Trans>
              </span>
            </Link>
          </li>

          <li
            style={{ height: "50px" }}
            className={
              this.isPathActive("/supervisor/gradebooks")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/supervisor/gradebooks">
              <span className="menu-title">
                <Trans>Gradebooks</Trans>
              </span>
            </Link>
          </li>
          <li
            style={{ height: "50px" }}
            className={
              this.isPathActive("/supervisor/attendance")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/supervisor/attendance">
              <span className="menu-title">
                <Trans>Attendance</Trans>
              </span>
            </Link>
          </li>
          <li
            style={{ height: "50px" }}
            className={
              this.isPathActive("/supervisor/transcript")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/supervisor/transcript">
              <span className="menu-title">
                <Trans>Transcript</Trans>
              </span>
            </Link>
          </li>

          <li
            className={
              this.isPathActive("/basic-ui") ? "nav-item active" : "nav-item"
            }
          >
            <div
              style={{ height: "50px" }}
              className={
                this.state.basicUiMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("basicUiMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-title">
                <Trans>Add/Drop Course Requests</Trans>
              </span>
            </div>
            <Collapse in={this.state.basicUiMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/supervisor/addRequest")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/supervisor/addRequest"
                    >
                      <Trans>Add Course Requests</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/supervisor/dropRequest")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/supervisor/dropRequest"
                    >
                      <Trans>Drop Course Requests</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/supervisor/withdrawRequest")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/supervisor/withdrawRequest"
                    >
                      <Trans>Withdraw Course Requests</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>

          <li
            style={{ height: "50px" }}
            className={
              this.isPathActive("/supervisor/gradingPolicy")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/supervisor/gradingPolicy">
              <span className="menu-title">
                <Trans>Grading Policy</Trans>
              </span>
            </Link>
          </li>
          <li
            style={{ height: "50px" }}
            className={
              this.isPathActive("/supervisor/academicStatus")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/supervisor/academicStatus">
              <span className="menu-title">
                <Trans>Student Academic Status</Trans>
              </span>
            </Link>
          </li>
          <li
            style={{ height: "50px" }}
            className={
              this.isPathActive("/supervisor/search")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/supervisor/search">
              <span className="menu-title">
                <Trans>Search Criteria</Trans>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }
}

export default withRouter(Sidebar);
