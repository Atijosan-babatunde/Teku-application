import axios from "axios";
import authHeader from "./headers";
// const recipiantCurrency = sessionStorage.getItem("recipiantCurrency")
// const recipiantConversion = sessionStorage.getItem("recipiantConversion")
// const conversionAmount = sessionStorage.getItem("conversionAmount")

const API_URL_ADD_CURRENCY_PAIR=process.env.REACT_APP_API_URL + "/request";
const API_URL_GET_CURRENCY_PAIR=process.env.REACT_APP_API_URL + "/pair";
const API_URL_GET_CURRENCY=process.env.REACT_APP_API_URL + "/currency";
// const API_URL_GET_CURRENCY_RATE=process.env.REACT_APP_API_URL + `pair/rate?baseCurrencyId=${recipiantConversion}&pairCurrencyId=${recipiantCurrency}&baseAmount=${conversionAmount}`;


const AddGetAllCurrencyPair = async (body) => {
  return await axios.post(
    API_URL_ADD_CURRENCY_PAIR,body,{
      headers:authHeader(),
    }
  ).then((response) => {
    return response.data;
  });
};

const GetCurrencyPair = async () => {
  return await axios({
    url:API_URL_GET_CURRENCY_PAIR,
    method: "get",
  }).then((response) => {
    return response.data;
  });
};

const GetCurrencyCode = async () => {
  return await axios({
    url:API_URL_GET_CURRENCY,
    method: "get",
  }).then((response) => {
    return response.data;
  });
};

// const GetCurrencyRate = async () => {
//   return await axios({
//     url:API_URL_GET_CURRENCY_RATE,
//     method: "get",
//   }).then((response) => {
//     return response.data;
//   });
// };
export async function  GET_CURRENCY_CALCULATOR (endpoint) {
  const url = process.env.REACT_APP_API_URL + endpoint;  
  try {
      return await axios.get(url);
  } catch (error) {
      return error.response;
  }
}

const LandingServices = {
    AddGetAllCurrencyPair,
    GetCurrencyPair,
    GetCurrencyCode,
    // GetCurrencyRate,
};
  
export default LandingServices