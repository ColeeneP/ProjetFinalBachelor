import { useState, useEffect } from 'react';
import { GetTenants } from "../services/Tenants";

export const useTenants = (events) => {
    const [tenants, setTenants] = useState([
        {"id": 1, "firstname": "", "lastname": "", "birthday": "1990-01-01", "phone": "", "email": ""}
    ]);
    useEffect(() => {
        GetTenants().then((res) => setTenants(res.data)) .catch(error => alert(error.message))
    }, [events])

    return {
        tenants, setTenants
    };
  };