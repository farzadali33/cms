const React = require("react");
const ReactDOM = require("react-dom");
const { BrowserRouter } = require("react-router-dom");
const App = require("./app/App");
const FacultyApp = require("./app/FacultyApp");
const SupervisorApp = require("./app/SupervisorApp");
const ControllerApp = require("./app/ControllerApp");
const Login = require("../src/app/user-pages/Login");

require("./i18n");
const serviceWorker = require("./serviceWorker");

ReactDOM.render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
