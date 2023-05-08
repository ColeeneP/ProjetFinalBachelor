import axios from "axios";
import config from "../config.json";

let authToken = localStorage.getItem('token');
let header = {'Token': authToken};

export const GetAllInventories = () => {
    return axios.get(config.baseURL + `api/inventory/`,{ 
        headers: header})
}

export const GetOneInventory = (id) => {
    return axios.get(config.baseURL + `api/inventory/` + id,{ 
        headers: header})
}

export const GetInventoriesForProperty = (id) => {
    return axios.get(config.baseURL + `api/inventorybyproperty/` + id,{ 
        headers: header})
}

export const CreateInventory = (post) => {
    return axios.post(config.baseURL + `api/inventory`, post, { 
        headers: header})
}

export const UpdateInventory = (id, post) => {
    return axios.put(config.baseURL + `api/inventory/`+ id, post, { 
        headers: header})
}

export const DeleteInventory = (id) => {
    return axios.delete(config.baseURL + `api/inventory/` + id,{ 
        headers: header})
}