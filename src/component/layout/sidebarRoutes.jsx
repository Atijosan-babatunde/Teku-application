
import {
    Route,
    Routes,
  } from "react-router-dom";

import SideMenu from "./sidebar";
import { useEffect } from "react";
import ProtectedRoutes from "./protectedRoutes";
import Dashboard from "../dashboard/dashboard/dashboard";
import CurrencyRate from "../dashboard/currency-rate/currency-rate";


  
  const SideBarRoute=()=>{
    useEffect(() => {
      window.scrollTo(0,0)
    },[])
    return (
      <div>
        <SideMenu>
        <Routes>   
          <Route> 
            <Route  path='/dashboard' element={<Dashboard/>}/>  
            <Route  path='/currency-rate' element={<CurrencyRate/>}/> 
            <Route  path='/*' element={<Dashboard/>}/>     
          </Route> 
          </Routes>  
        </SideMenu>
      </div>
    );
  }
  
  export default SideBarRoute;
  