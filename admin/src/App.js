import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import {Fragment} from "react";
import DashboardPage from "./Pages/DashboardPage";
import ProfilePage from "./Pages/ProfilePage";
import Page404 from "./Pages/Page-404";
import SendOTPPage from "./Components/AccountRecover/Send-OTP";
import VerifyOTPPage from "./Components/AccountRecover/Verify-OTP";
import CreatePasswordPage from "./Components/AccountRecover/Create-Password";
import React from "react";
import FullscreenLoader from "./Components/masterLayout/FullscreenLoader";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import {getToken} from "./Helper/SessionHelper";
import SkillPage from "./Pages/SkillPage";
import ExperiencePage from "./Pages/ExperiencePage";
import ProjectPage from "./Pages/ProjectPage";
import BlogPage from "./Pages/BlogPage";

function App() {

  if(getToken()) {
      return (
          <div className="App">
              <Fragment>
                  <BrowserRouter>
                      <Routes>
                          <Route exact path="/skill" element={<SkillPage/>}/>
                          <Route exact path="/experience" element={<ExperiencePage/>}/>
                          <Route exact path="/project" element={<ProjectPage/>}/>
                          <Route exact path="/blog" element={<BlogPage/>}/>


                          <Route exact path="/" element={<DashboardPage/>}/>
                          <Route exact path="/Profile" element={<ProfilePage/>}/>
                          <Route exact path="/Login" element={<Navigate to="/" replace />}/>
                          <Route exact path="/Register" element={<Navigate to="/" replace />}/>
                          <Route path="*" element={<Page404/>}/>
                      </Routes>
                  </BrowserRouter>
                  <FullscreenLoader/>
              </Fragment>
          </div>
      );
  }else{
      return (
          <div className="App">
              <Fragment>
                  <BrowserRouter>
                      <Routes>
                          <Route path="/" element={<Navigate to="/Login" replace />}/>
                          <Route exact path="/Login" element={<LoginPage/>}/>
                          <Route exact path="/Register" element={<RegisterPage/>}/>
                          <Route exact path="/SendOTP" element={<SendOTPPage/>}/>
                          <Route exact path="/VerifyOTP" element={<VerifyOTPPage/>}/>
                          <Route exact path="/CreatePassword" element={<CreatePasswordPage/>}/>
                          <Route path="*" element={<Page404/>}/>
                      </Routes>
                  </BrowserRouter>
                  <FullscreenLoader/>
              </Fragment>
          </div>
      );
  }
}

export default App;
