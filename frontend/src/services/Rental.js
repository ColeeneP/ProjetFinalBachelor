import axios from "axios";
import config from "../config.json";

let authToken = localStorage.getItem('token');
let header = {'Token': authToken};

export const GetRentals = () => {
    return axios.get(config.baseURL + `api/rental/`,{ 
        headers: header})
}

export const GetRental = (id) => {
    return axios.get(config.baseURL + `api/rental/` + id,{ 
        headers: header})
}

export const GetRentalsForTenant = (id) => {
    return axios.get(config.baseURL + `api/rentalbytenant/` + id,{ 
        headers: header})
}

export const CreateRental = (post) => {
    return axios.post(config.baseURL + `api/rental`, post, { 
        headers: header})
}

export const UpdateRental = (id, post) => {
    return axios.put(config.baseURL + `api/rental/`+ id, post, { 
        headers: header})
}

export const DeleteRental = (id) => {
    return axios.delete(config.baseURL + `api/rental/` + id,{ 
        headers: header})
}