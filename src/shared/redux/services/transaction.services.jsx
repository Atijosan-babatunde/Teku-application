import axios from "axios";
import authHeader from "./headers";
const API_URL_GRT_USERS_TRANSACTION = process.env.REACT_APP_API_URL + "/transaction/users/personal?page=1&limit=7";
const API_URL_TRANSACTION_USERS = process.env.REACT_APP_API_URL + "/transaction"
const API_URL_GET_ALL_TRANSACTION_USERS = process.env.REACT_APP_API_URL + "/transaction"
const API_URL_TRANSACTION_CART = process.env.REACT_APP_API_URL + "/transaction/cart"
const API_URL_GET_ALL_TRANSACTION_CART = process.env.REACT_APP_API_URL + "/transaction/cart"
const API_URL_GET_BANK_LIST = process.env.REACT_APP_API_URL + "/bank"



const GetUsersTransaction = async () => {
    return await axios({
        url: API_URL_GRT_USERS_TRANSACTION,
        headers: authHeader(),
        method: "get",
    }).then((response) => {
        return response.data;
    });
};

const TransactionUser = async (body) => {
    return await axios.post(
        API_URL_TRANSACTION_USERS, body, {
    }
    ).then((response) => {
        return response.data;
    });
};

const GetUsersBanksListed = async () => {
    return await axios({
        url: API_URL_GET_BANK_LIST,
        headers: authHeader(),
        method: "get",
    }).then((response) => {
        return response.data;
    });
};

const GetAllTransactionUsers = async () => {
    return await axios({
        url: API_URL_GET_ALL_TRANSACTION_USERS,
        headers: authHeader(),
        method: "get",
    }).then((response) => {
        return response.data;
    });
};

const AllTransactionCart = async (body) => {
    return await axios.post(
        API_URL_TRANSACTION_CART, body, {
    }
    ).then((response) => {
        return response.data;
    });
};

const GetAllTransactionCart = async () => {
    return await axios({
        url: API_URL_GET_ALL_TRANSACTION_CART,
        headers: authHeader(),
        method: "get",
    }).then((response) => {
        return response.data;
    });
};


const TransactionServices = {
    GetUsersTransaction,
    TransactionUser,
    GetUsersBanksListed,
    GetAllTransactionUsers,
    AllTransactionCart,
    GetAllTransactionCart,
}

export default TransactionServices