
import {
  Route,
  Routes,
} from "react-router-dom";

import SideMenu from "./sidebar";
import { useEffect } from "react";
import Dashboard from "../dashboard/dashboard/dashboard";
import CurrencyRate from "../dashboard/currency-rate/currency-rate";
import PaymentCart from "../dashboard/payment-cart/payment-card";
import Notification from "../dashboard/notification/notification";
import Recipients from "../dashboard/recipients/recipients";
import Support from "../dashboard/support/support";
import Transactions from "../dashboard/transaction/transaction";
import UserProfile from "../SignUPDashboard/userProfile";
import ProtectedRoutes from "../layout/protectedRoutes"



const SideBarRoute = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div >
      <SideMenu>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/currency-rate' element={<CurrencyRate />} />
            <Route path='/payment-cart' element={<PaymentCart />} />
            <Route path='/notification' element={<Notification />} />
            <Route path='/recipient' element={<Recipients />} />
            <Route path='/support' element={<Support />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path='/*' element={<Dashboard />} />
          </Route>
        </Routes>
      </SideMenu>
    </div>
  );
}

export default SideBarRoute;
