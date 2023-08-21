import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './component/home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import SeeAllPage from './component/herosectiontable/SeeAllPage/seeAllPage';
import SeeAllFaqPage from './component/faq/SeeAllFaqPage/seeAllFaqPage';
import ContactUs from './component/faq/SeeAllFaqPage/ContactUs/contactUs';
import SignUpDashboard from './component/SignUPDashboard/signup';
import LogIn from './component/SignUPDashboard/login';
import SideBarRoute from './component/layout/sidebarRoutes';


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
          <Route  path='/*' element={<SideBarRoute/>}/>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
