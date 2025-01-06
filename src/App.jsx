import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Schedule from "./Component/Schedule/Schedule";
import AwarenessPage from "./page/awareness/AwarenessPage.jsx";
import CollectorDashboardPage from "./page/dashboard/admin/CollectorDashboardPage.jsx";
import DashboardPage from "./page/dashboard/admin/DashboardPage.jsx";
import HospitalDashboardPage from "./page/dashboard/admin/HospitalDashboardPage.jsx";
import LaboratoryDashboardPage from "./page/dashboard/admin/LaboratoryDashboardPage.jsx";
import ManagerDashboardPage from "./page/dashboard/admin/ManagerDashboardPage.jsx";
import SystemAdminDashboardPage from "./page/dashboard/admin/SystemAdminDashboardPage.jsx";
import DonorDashboardPage from "./page/dashboard/donor/DonorDashboardPage.jsx";
import LandingPage from "./page/landing/LandingPage.jsx";
import LoginPage from "./page/login/LoginPage";
import NotFoundPage from "./page/NotFoundPage.jsx";
import HospitalRegistrationPage from "./page/registration/hospital/HospitalRegistrationPage";
import IndividualRegistrationPage from "./page/registration/individual/IndividualRegistrationPage.jsx";
import RegistrationPage from "./page/registration/RegistrationPage.jsx";
import RegistrationSuccess from "./page/registration/RegistrationSuccessPage.jsx";
import StoreManagerDashboardPage from "./page/dashboard/admin/StoreManagerDashboardPage.jsx";
import ForgotPasswordPage from"./page/login/ForgotPasswordPage.jsx";
import ResetPasswordPage from "./page/login/ResetPasswordPage.jsx";
import QualificationPage from "./page/registration/individual/QualificationPage.jsx";
import UserLoginPage from "./page/userLogin/UserLoginPage.jsx";
import UserForgotPasswordPage from "./page/userLogin/UserForgotPasswordPage.jsx";
import UserResetPasswordPage from "./page/userLogin/UserResetPasswordPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
      <Route path="/resetpassword" element={<ResetPasswordPage  />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin/login" element={<UserLoginPage />} />
      <Route path="/admin/forgotpassword" element={<UserForgotPasswordPage />} />
      <Route path="/admin/resetpassword" element={<UserResetPasswordPage  />} />
      <Route path="/awareness" element={<AwarenessPage />} />
      <Route path="/Qualification" element={<QualificationPage />} />

      {/* Registration Routes */}
      <Route path="/registration">
        <Route index element={<RegistrationPage />} />
        <Route path="individual">
          <Route index element={<IndividualRegistrationPage />} />
          <Route
            path="success"
            element={<RegistrationSuccess isHospital={false} />}
          />
        </Route>
        <Route path="hospital">
          <Route index element={<HospitalRegistrationPage />} />
          <Route
            path="success"
            element={<RegistrationSuccess isHospital={true} />}
          />
        </Route>
      </Route>

      {/* Dashboard Routes */}
      <Route path="/dashboard">
        <Route index element={<DashboardPage />} />
        <Route path="manager" element={<ManagerDashboardPage />} />
        <Route path="collector" element={<CollectorDashboardPage />} />
        <Route path="laboratory" element={<LaboratoryDashboardPage />} />
        <Route path="hospital" element={<HospitalDashboardPage />} />
        <Route path="system-admin" element={<SystemAdminDashboardPage />} />
        <Route path="store-manager" element={<StoreManagerDashboardPage />} />
        <Route path="donor" element={<DonorDashboardPage />} />
      </Route>

      {/* <Route path="/schedule" element={<Schedule />} /> */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
