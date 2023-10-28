import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './component/home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import SeeAllPage from './component/herosectiontable/SeeAllPage/seeAllPage';
import SeeAllFaqPage from './component/faq/SeeAllFaqPage/seeAllFaqPage';
import ContactUs from './component/faq/SeeAllFaqPage/ContactUs/contactUs';
import SignUpDashboard from './component/SignUPDashboard/signup';
import LogIn from './component/SignUPDashboard/login';
import BusinessRegistration from './component/SignUPDashboard/personal_business_registration/business/businessReg';
import PersonalRegistration from './component/SignUPDashboard/personal_business_registration/personal/personalReg';
import WelcomeToTeku from './component/SignUPDashboard/welcomeToTeku';
import "react-html5-camera-photo/build/css/index.css";
import SignUpWelcomeToTeku from "./component/SignUPDashboard/signUpWelcomeToTeku";
import SideBarRoute from './component/layout/sidebarRoutes';
import './App.css'
import ResetPassword from "./component/SignUPDashboard/resetPassword";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/see-all" element={<SeeAllPage/>}/>
          <Route path="/see-all-faq" element={<SeeAllFaqPage/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/signup" element={<SignUpDashboard />}/>
          <Route path="/login" element={<LogIn />}/>
          <Route path="/personal-registration" element={<PersonalRegistration/>}/>
          <Route path="/business-registration" element={<BusinessRegistration/>}/>
          <Route path="/welcome-personal-data" element={<WelcomeToTeku/>}/>
          <Route path="/signup-welcome-business-data" element={<SignUpWelcomeToTeku/>}/>
          <Route path="/reset-password" element={<ResetPassword/>}/>
          <Route  path='/*' element={<SideBarRoute/>}/>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
