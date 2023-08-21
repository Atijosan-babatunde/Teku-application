
import {
    Route,
    Routes,
  } from "react-router-dom";

import SideMenu from "./sidebar";
import { useEffect } from "react";
import ProtectedRoutes from "./protectedRoutes";

import Dashboard from "../dashboard/dashboard/dashboard";
// import CreateOrder from "../dashboard/order/create-order";
// import PendingOrder from "../dashboard/pendingOrder/pending-order";
// import Purchases from "../dashboard/purchases/purchases";
// import Wallet from "../dashboard/wallet/wallet";
// import WalletDeposit from "../dashboard/wallet/deposit";
// import Withdraw from "../dashboard/wallet/withdraw";
// import CreateOrderInvoice from "../dashboard/order/create-order-invoice";
// import CreateOrderCongrats from "../dashboard/order/create-order-congrats";
// import CreateOrderAwaiting from "../dashboard/order/create-order-awaiting";
// import CreateOrderConfirmation from "../dashboard/order/create-order-confirmation";

  
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
            {/* <Route  path='/create-order' element={<CreateOrder/>}/> 
            <Route  path='/create-order/invoice' element={<CreateOrderInvoice/>}/> 
            <Route  path='/create-order/congrats' element={<CreateOrderCongrats/>}/> 
            <Route  path='/create-order/awaiting' element={<CreateOrderAwaiting/>}/> 
            <Route  path='/create-order/confirmation' element={<CreateOrderConfirmation/>}/>
            <Route  path='/pending-order' element={<PendingOrder/>}/> 
            <Route  path='/purchases' element={<Purchases/>}/> 
           

            <Route  path='/wallet' element={<Wallet/>}/> 
            <Route path='/wallet/deposit' element={<WalletDeposit />} />
            <Route path='/wallet/withdraw' element={<Withdraw />} /> */}
            <Route  path='/*' element={<Dashboard/>}/>     
          </Route> 
          </Routes>  
        </SideMenu>
      </div>
    );
  }
  
  export default SideBarRoute;
  