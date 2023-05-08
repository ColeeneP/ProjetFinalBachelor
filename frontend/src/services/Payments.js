import axios from "axios";
import config from "../config.json";

let authToken = localStorage.getItem('token');
let header = {'Token': authToken};

export const GetPayments = () => {
    return axios.get(config.baseURL + `api/payment/`,{ 
        headers: header})
}

export const GetPayment = (id) => {
    return axios.get(config.baseURL + `api/payment/` + id,{ 
        headers: header})
}

export const GetPaymentForTenant = (id) => {
    return axios.get(config.baseURL + `api/paymentbytenant/` + id,{ 
        headers: header})
}

export const CreatePayment = (post) => {
    return axios.post(config.baseURL + `api/payment/`, post, { 
        headers: header})
}

export const UpdatePayment = (id, post) => {
    return axios.put(config.baseURL + `api/payment/`+ id, post, { 
        headers: header})
}

export const DeletePayment = (id) => {
    return axios.delete(config.baseURL + `api/payment/` + id,{ 
        headers: header})
}