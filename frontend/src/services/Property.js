import axios from "axios";
import config from "../config.json";

let authToken = localStorage.getItem('token');
let header = {'Token': authToken};

export const GetProperties = () => {
    return axios.get(config.baseURL + `api/property/`,{ 
        headers: header})
}

export const GetProperty = (id) => {
    return axios.get(config.baseURL + `api/property/` + id,{ 
        headers: header})
}

export const CreateProperty = (post) => {
    return axios.post(config.baseURL + `api/property`, post, { 
        headers: header})
}

export const UpdateProperty = (id, post) => {
    return axios.put(config.baseURL + `api/property/`+ id, post, { 
        headers: header})
}

export const DeleteProperty = (id) => {
    return axios.delete(config.baseURL + `api/property/` + id,{ 
        headers: header})
}