import axios from "axios";
import config from "../config.json";

let authToken = localStorage.getItem('token');
let header = {'Token': authToken};

export const GetTenants = () => {
    return axios.get(config.baseURL + `api/tenant/`,{ 
        headers: header})
}

export const GetTenant = (id) => {
    return axios.get(config.baseURL + `api/tenant/` + id,{ 
        headers: header})
}

export const CreateTenant = (post) => {
    return axios.post(config.baseURL + `api/tenant`, post, { 
        headers: header})
}

export const UpdateTenant = (id, post) => {
    return axios.put(config.baseURL + `api/tenant/`+ id, post, { 
        headers: header})
}

export const DeleteTenant = (id) => {
    return axios.delete(config.baseURL + `api/tenant/` + id,{ 
        headers: header})
}