import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { Trans } from "react-i18next";

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
                src={require("../../../assets/images/logo-mini.png")}
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
                <p className="profile-name">Admin</p>
                <p className="designation">
                  <Trans>CMS Controller</Trans>
                </p>
              </div>
            </a>
          </li>
          <li
            style={{ height: "50px" }}
            className={
              this.isPathActive("/controller/updateProfile")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/controller/updateProfile">
              <span className="menu-title">
                <Trans>Update Profile</Trans>
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
                <Trans>Add Users</Trans>
              </span>
            </div>
            <Collapse in={this.state.basicUiMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/controller/addStudent")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/controller/addStudent"
                    >
                      <Trans>Add Student</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/controller/addFaculty")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/controller/addFaculty"
                    >
                      <Trans>Add Faculty Member</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/controller/addSupervisor")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/controller/addSupervisor"
                    >
                      <Trans>Add Degree Supervisor</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>

          <li
            style={{ height: "50px" }}
            className={
              this.isPathActive("/controller/assignCourses")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/controller/assignCourses">
              <span className="menu-title">
                <Trans>Assign Courses to Faculty</Trans>
              </span>
            </Link>
          </li>

          <li
            style={{ height: "50px" }}
            className={
              this.isPathActive("/controller/registerStudent")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/controller/registerStudent">
              <span className="menu-title">
                <Trans>Register Students in Courses</Trans>
              </span>
            </Link>
          </li>

          <li
            style={{ height: "50px" }}
            className={
              this.isPathActive("/controller/registerFaculty")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/controller/registerFaculty">
              <span className="menu-title">
                <Trans>
                  Register Faculty Member as
                  <br /> Degree Supervisor
                </Trans>
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
