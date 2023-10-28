import axios from "axios";
import authHeader from "./headers";
const API_URL_RECIPIENT_USERS =
  process.env.REACT_APP_API_URL + "/recipient/create";
const API_URL_GET_RECIPIENT_USERS_DATA =
  process.env.REACT_APP_API_URL + "/recipient/user";
const API_URL_GET_NOTIFICATION_DATA =
  process.env.REACT_APP_API_URL + "/notifications/me";

const RecipientUser = async (body) => {
  return await axios
    .post(API_URL_RECIPIENT_USERS, body, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    });
};

const GetRecipientUsersData = async () => {
  return await axios({
    url: API_URL_GET_RECIPIENT_USERS_DATA,
    method: "get",
    headers: authHeader(),
  }).then((response) => {
    return response.data;
  });
};

const GetNotificationsData = async () => {
  return await axios({
    url: API_URL_GET_NOTIFICATION_DATA,
    method: "get",
    headers: authHeader(),
  }).then((response) => {
    return response.data;
  });
};

const RecipientServices = {
  RecipientUser,
  GetRecipientUsersData,
  GetNotificationsData,
};

export default RecipientServices;
