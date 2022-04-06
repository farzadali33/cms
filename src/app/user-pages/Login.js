import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Form } from "react-bootstrap";
import background from "../../assets/images/background.jpg";

export class Login extends Component {
  render() {
    return (
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo text-center">
                  <img
                    src={require("../../assets/images/logo.png")}
                    alt="logo"
                  />
                  <h4 className="blueee mb-0 mt-4 text-center font-weight-medium ">
                    Faculty of Computing and Information Technology
                  </h4>
                </div>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3">
                  <Form.Group className="d-flex search-field">
                    <Form.Control
                      type="email"
                      placeholder="Username"
                      size="lg"
                      className="h-auto"
                    />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      size="lg"
                      className="h-auto"
                    />
                  </Form.Group>
                  <div className="mt-3">
                    <Link className="btn bluee btn-block btn-lg font-weight-medium auth-form-btn">
                      SIGN IN
                    </Link>
                  </div>
                  {/* <Link to="/signup">No account? Click here to Sign up!</Link> */}
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
