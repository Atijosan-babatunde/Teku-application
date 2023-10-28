import axios from "axios";
import authHeader from "./headers";
const API_URL_GET_NOTIFICATION_DATA = process.env.REACT_APP_API_URL + "/notifications/me"


const GetNotificationsData = async () => {
    return await axios({
        url: API_URL_GET_NOTIFICATION_DATA,
        headers: authHeader(),
        method: "get"
    }).then((response) => {
        return response.data;
    });
};



const NotificationServices = {
    GetNotificationsData,
}

export default NotificationServices