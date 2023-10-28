import axios from "axios";
import authHeader from "./headers";
const API_URL_ADD_CURRENCY_PAIR = process.env.REACT_APP_API_URL + "/request";
const API_URL_GET_CURRENCY_PAIR = process.env.REACT_APP_API_URL + "/pair";
const API_URL_GET_CURRENCY = process.env.REACT_APP_API_URL + "/currency";
const API_URL_LOGIN_USER = process.env.REACT_APP_API_URL + "/auth/login";
const API_URL_REGISTER_USER = process.env.REACT_APP_API_URL + "/auth/register";

const AddGetAllCurrencyPair = async (body) => {
  return await axios
    .post(API_URL_ADD_CURRENCY_PAIR, body, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    });
};

const GetCurrencyPair = async () => {
  return await axios({
    url: API_URL_GET_CURRENCY_PAIR,
    method: "get",
  }).then((response) => {
    return response.data;
  });
};

const GetCurrencyCode = async () => {
  return await axios({
    url: API_URL_GET_CURRENCY,
    method: "get",
  }).then((response) => {
    return response.data;
  });
};

const LoginUser = async (body) => {
  return await axios.post(API_URL_LOGIN_USER, body, {}).then((response) => {
    sessionStorage.setItem("userData", response.data.data.accessToken);
    return response.data;
  });
};

const RegisterUser = async (body) => {
  return await axios.post(API_URL_REGISTER_USER, body, {}).then((response) => {
    return response.data;
  });
};

export async function GET_CURRENCY_CALCULATOR(endpoint) {
  const url = process.env.REACT_APP_API_URL + endpoint;
  try {
    return await axios.get(url);
  } catch (error) {
    return error.response;
  }
}

export async function FORGOT_PASSWORD(endpoint, data) {
  const url = process.env.REACT_APP_API_URL + endpoint;
  try {
    return await axios.post(url, data);
  } catch (error) {
    return error.response;
  }
}

const LandingServices = {
  AddGetAllCurrencyPair,
  GetCurrencyPair,
  GetCurrencyCode,
  LoginUser,
  RegisterUser,
};

export default LandingServices;
