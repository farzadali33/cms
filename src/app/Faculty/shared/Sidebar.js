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
                <p className="profile-name">Abdul Mateen</p>
                <p className="designation">
                  <Trans>Faculty</Trans>
                </p>
              </div>
            </a>
          </li>
          <li
            style={{ height: "50px" }}
            className={
              this.isPathActive("/faculty/updateProfile")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/faculty/updateProfile">
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
                <Trans>OS-BS(IT) Fall 2019(Morning AN)</Trans>
              </span>
            </div>
            <Collapse in={this.state.basicUiMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/faculty/gradebook")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/faculty/gradebook"
                    >
                      <Trans>Gradebook</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/faculty/attendance")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/faculty/attendance"
                    >
                      <Trans>Attendance</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/faculty/filemanager")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/faculty/filemanager"
                    >
                      <Trans>File Manager</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/basic-ui") ? "nav-item active" : "nav-item"
            }
          >
            <div
              style={{ height: "50px" }}
              className={
                this.state.advancedUiMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("advancedUiMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-title">
                <Trans>OS-BS(IT) Fall 2019(Afternoon AN)</Trans>
              </span>
            </div>
            <Collapse in={this.state.advancedUiMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/aa")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/aa"
                    >
                      <Trans>Gradebook</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/cc")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/cc"
                    >
                      <Trans>Attendance</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/ee")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/ee"
                    >
                      <Trans>File Manager</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/basic-ui") ? "nav-item active" : "nav-item"
            }
          >
            <div
              style={{ height: "50px" }}
              className={
                this.state.appsMenuOpen ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("appsMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-title">
                <Trans>OOP-BS(CS) Fall 2018(Morning AN)</Trans>
              </span>
            </div>
            <Collapse in={this.state.appsMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/bb")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/bb"
                    >
                      <Trans>Gradebook</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/dd")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/dd"
                    >
                      <Trans>Attendance</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        this.isPathActive("/ww")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/ww"
                    >
                      <Trans>File Manager</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>

          <li
            style={{ height: "50px" }}
            className={
              this.isPathActive("/faculty/transcript")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/faculty/transcript">
              <span className="menu-title">
                <Trans>View Student Transcript</Trans>
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
