import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container ht-100p pd-t-0-f">
          <div className="d-sm-flex justify-content-center justify-content-sm-between py-2 w-100">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
              Copyright © 2021 FCIT, All rights reserved
            </span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
              Samsani Road, Quaid-i-Azam Campus, Lahore, Punjab
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
