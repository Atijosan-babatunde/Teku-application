import Footer from './component/footer/footer';
import Header from './component/header/header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './component/home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import SeeAllPage from './component/herosectiontable/SeeAllPage/seeAllPage';
import SeeAllFaqPage from './component/faq/SeeAllFaqPage/seeAllFaqPage';
import ContactUs from './component/faq/SeeAllFaqPage/ContactUs/contactUs';


function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/see-all" element={<SeeAllPage/>}/>
          <Route path="/see-all-faq" element={<SeeAllFaqPage/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
