import axios from "axios";
import authHeader from "./headers";

const API_URL_GET_USER_DATA = process.env.REACT_APP_API_URL + "/users/profile";


const GetUsersDatas = async () => {
    return await axios({
        url: API_URL_GET_USER_DATA,
        headers: authHeader(),
        method: "get",
    }).then((response) => {
        return response.data;
    });
};


const UserServices = {
    GetUsersDatas,
};

export default UserServices;