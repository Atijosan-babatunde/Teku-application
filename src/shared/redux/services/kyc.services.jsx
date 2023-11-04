import axios from "axios";
import authHeader from "./headers";

const API_URL_KYC_PERSONAL_USERS = process.env.REACT_APP_API_URL + "/kyc/personal";
const API_URL_KYC_BUSINESS_USERS = process.env.REACT_APP_API_URL + "/kyc/business";
const API_URL_KYC_VERIFY_IDENTITY_USERS = process.env.REACT_APP_API_URL + "/kyc/verify.identity";



const KycPersonalUser = async (body) => {
    return await axios
        .post(API_URL_KYC_PERSONAL_USERS, body, {
            headers: authHeader(),
        })
        .then((response) => {
            return response.data;
        });
};

const KycBusinessUser = async (body) => {
    return await axios
        .post(API_URL_KYC_BUSINESS_USERS, body, {
            headers: authHeader(),
        })
        .then((response) => {
            return response.data;
        });
};

const KycVerifyIdentityUser = async (body) => {
    return await axios
        .post(API_URL_KYC_VERIFY_IDENTITY_USERS, body, {
            headers: authHeader(),
        })
        .then((response) => {
            return response.data;
        });
};


const KycServices = {
    KycPersonalUser,
    KycBusinessUser,
    KycVerifyIdentityUser,
};

export default KycServices;