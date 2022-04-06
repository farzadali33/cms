import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/Student/shared/Spinner";
// import Register from "./user-pages/Register";
const register = lazy(() => import("../app/user-pages/Register"));
const login = lazy(() => import("../app/user-pages/Login"));
const studentDashboard = lazy(() => import("./Student/Dashboard"));
const studentGradebook = lazy(() => import("./Student/Gradebook"));
const studentUpdateProfile = lazy(() => import("./Student/UpdateProfile"));
const studentViewTranscript = lazy(() => import("./Student/ViewTranscript"));
const studentAddCourse = lazy(() =>
  import("./Student/application-links/AddCourse")
);
const studentDropCourse = lazy(() =>
  import("./Student/application-links/DropCourse")
);
const studentWithdrawCourse = lazy(() =>
  import("./Student/application-links/WithdrawCourse")
);
const studentChallanForm = lazy(() => import("./Student/ChallanForm"));

const facultyDashboard = lazy(() => import("./Faculty/Dashboard"));
const facultyGradebook = lazy(() => import("./Faculty/Gradebook"));
const facultyUpdateProfile = lazy(() => import("./Faculty/UpdateProfile"));
const facultyTranscript = lazy(() => import("./Faculty/Transcript"));
const facultyListCategories = lazy(() =>
  import("./Faculty/application-links/ListCategories")
);
const facultyAddCategory = lazy(() =>
  import("./Faculty/application-links/AddCategory")
);
const facultyListEntries = lazy(() =>
  import("./Faculty/application-links/ListEntries")
);
const facultyAddEntry = lazy(() =>
  import("./Faculty/application-links/AddEntry")
);

const supervisorDashboard = lazy(() => import("./Supervisor/Dashboard"));
const supervisorUpdateProfile = lazy(() =>
  import("./Supervisor/UpdateProfile")
);
const supervisorCourses = lazy(() => import("./Supervisor/Courses"));
const supervisorGradebooks = lazy(() => import("./Supervisor/Gradebooks"));
const supervisorAttendance = lazy(() => import("./Supervisor/Attendance"));
const supervisorTranscript = lazy(() => import("./Supervisor/Transcript"));
const supervisorAddRequest = lazy(() =>
  import("./Supervisor/AddCourseRequest")
);
const supervisorDropRequest = lazy(() =>
  import("./Supervisor/DropCourseRequest")
);
const supervisorWithdrawRequest = lazy(() =>
  import("./Supervisor/WithdrawCourseRequest")
);
const supervisorGradingPolicy = lazy(() =>
  import("./Supervisor/GradingPolicy")
);
const supervisorAcademicStatus = lazy(() =>
  import("./Supervisor/AcademicStatus")
);
const supervisorSearch = lazy(() => import("./Supervisor/Search"));

const supervisorByProbation = lazy(() =>
  import("./Supervisor/application-links/ByProbation")
);
const supervisorBySubjectGrade = lazy(() =>
  import("./Supervisor/application-links/BySubjectGrade")
);
const supervisorByStudentGrade = lazy(() =>
  import("./Supervisor/application-links/ByStudentGrade")
);
const supervisorByCGPA = lazy(() =>
  import("./Supervisor/application-links/ByCgpa")
);

const controllerUpdateProfile = lazy(() =>
  import("./Controller/UpdateProfile")
);
const controllerAddStudent = lazy(() => import("./Controller/AddStudent"));
const controllerAddFaculty = lazy(() => import("./Controller/AddFaculty"));
const controllerAddSupervisor = lazy(() =>
  import("./Controller/AddSupervisor")
);
const controllerAssignCourses = lazy(() =>
  import("./Controller/AssignCourses")
);
const controllerRegisterStudent = lazy(() =>
  import("./Controller/RegisterStudent")
);
const controllerRegisterFaculty = lazy(() =>
  import("./Controller/RegisterFaculty")
);

const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={login}></Route>
          <Route path="/signup" component={register}></Route>

          {
            //-----------------------------STUDENT ROUTES-----------------------------
          }

          <Route exact path="/student/dashboard" component={studentDashboard} />
          <Route path="/student/gradebook/:id" component={studentGradebook} />
          <Route
            path="/student/updateProfile"
            component={studentUpdateProfile}
          />
          <Route
            path="/student/viewTranscript"
            component={studentViewTranscript}
          />
          <Route exact path="/student/addCourse" component={studentAddCourse} />
          <Route path="/student/dropCourse" component={studentDropCourse} />
          <Route
            path="/student/withdrawCourse"
            component={studentWithdrawCourse}
          />
          <Route path="/student/challanForm" component={studentChallanForm} />

          {
            //-----------------------------FACULTY ROUTES-----------------------------
          }

          <Route exact path="/faculty" component={facultyDashboard} />
          <Route exact path="/faculty/gradebook" component={facultyGradebook} />
          <Route
            exact
            path="/faculty/updateProfile"
            component={facultyUpdateProfile}
          />
          <Route
            exact
            path="/faculty/transcript"
            component={facultyTranscript}
          />
          <Route
            exact
            path="/faculty/gradebook/listcategories"
            component={facultyListCategories}
          />
          <Route
            exact
            path="/faculty/gradebook/addcategory"
            component={facultyAddCategory}
          />
          <Route
            exact
            path="/faculty/gradebook/listentries"
            component={facultyListEntries}
          />
          <Route
            exact
            path="/faculty/gradebook/addentry"
            component={facultyAddEntry}
          />

          {
            //-----------------------------DEGREE SUPERVISOR ROUTES-----------------------------
          }
          <Route exact path="/supervisor" component={supervisorDashboard} />
          <Route
            path="/supervisor/updateProfile"
            component={supervisorUpdateProfile}
          />
          <Route
            exact
            path="/supervisor/courses"
            component={supervisorCourses}
          />
          <Route
            path="/supervisor/gradebooks"
            component={supervisorGradebooks}
          />
          <Route
            path="/supervisor/attendance"
            component={supervisorAttendance}
          />
          <Route
            path="/supervisor/transcript"
            component={supervisorTranscript}
          />
          <Route
            path="/supervisor/addRequest"
            component={supervisorAddRequest}
          />
          <Route
            path="/supervisor/dropRequest"
            component={supervisorDropRequest}
          />
          <Route
            path="/supervisor/withdrawRequest"
            component={supervisorWithdrawRequest}
          />
          <Route
            path="/supervisor/gradingPolicy"
            component={supervisorGradingPolicy}
          />
          <Route
            path="/supervisor/academicStatus"
            component={supervisorAcademicStatus}
          />
          <Route
            path="/supervisor/search/byprobation"
            component={supervisorByProbation}
          />

          <Route
            path="/supervisor/search/bysubjectgrade"
            component={supervisorBySubjectGrade}
          />
          <Route
            path="/supervisor/search/bystudentgrade"
            component={supervisorByStudentGrade}
          />
          <Route
            path="/supervisor/search/bycgpa"
            component={supervisorByCGPA}
          />
          <Route path="/supervisor/search" component={supervisorSearch} />

          {
            //-----------------------------CONTROLLER ROUTES-----------------------------
          }
          <Route
            path="/controller/updateProfile"
            component={controllerUpdateProfile}
          />
          <Route
            path="/controller/addStudent"
            component={controllerAddStudent}
          />
          <Route
            path="/controller/addFaculty"
            component={controllerAddFaculty}
          />
          <Route
            path="/controller/addSupervisor"
            component={controllerAddSupervisor}
          />
          <Route
            path="/controller/assignCourses"
            component={controllerAssignCourses}
          />
          <Route
            path="/controller/registerStudent"
            component={controllerRegisterStudent}
          />
          <Route
            path="/controller/registerFaculty"
            component={controllerRegisterFaculty}
          />

          {
            //-----------------------------OTHER ROUTES-----------------------------
          }

          <Route path="/user-pages/login-1" component={Login} />
          <Route path="/user-pages/register-1" component={Register1} />

          <Route path="/error-pages/error-404" component={Error404} />
          <Route path="/error-pages/error-500" component={Error500} />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
