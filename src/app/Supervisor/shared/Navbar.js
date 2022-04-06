import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

class Navbar extends Component {
  toggleOffcanvas() {
    document.querySelector(".sidebar-offcanvas").classList.toggle("active");
  }
  toggleRightSidebar() {
    document.querySelector(".right-sidebar").classList.toggle("open");
  }
  render() {
    return (
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <Link
            className="navbar-brand brand-logo-mini d-inline-block d-lg-none"
            to="/"
          >
            <img
              src={require("../../../assets/images/logo-mini.svg")}
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            onClick={() => document.body.classList.toggle("sidebar-icon-only")}
          >
            <span className="icon-menu"></span>
          </button>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center">
          <Link className="navbar-brand brand-logo" to="/">
            <img
              style={{ width: "50px" }}
              src={require("../../../assets/images/logo.png")}
              alt="logo"
            />
          </Link>
          <h3 className="blueee mb-0 font-weight-medium d-none d-xl-flex">
            <Trans>Faculty of Computing and Information Technology</Trans>
          </h3>
          <ul className="navbar-nav navbar-nav-right">
            <form
              className="search-form d-none d-lg-block"
              action="!#"
              onSubmit={(evt) => evt.preventDefault()}
            ></form>

            <li className="nav-item nav-profile d-none d-sm-flex">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link">
                  <div className="nav-profile-text">
                    <p className="mb-1 text-black">
                      <Trans>Muhammad Idrees</Trans>
                    </p>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="navbar-dropdown">
                  <Dropdown.Item
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <p class="preview-item d-flex align-items-center m-0">
                      <i class="dropdown-item-icon icon-question text-primary mr-2"></i>
                      <Trans>FAQ</Trans>
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <p class="preview-item d-flex align-items-center m-0">
                      <i class="dropdown-item-icon icon-power text-primary mr-2"></i>
                      <Trans>Sign Out</Trans>
                    </p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            onClick={this.toggleOffcanvas}
          >
            <span className="icon-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
