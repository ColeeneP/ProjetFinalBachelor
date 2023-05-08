import { useState, useEffect } from 'react';
import { GetProperties } from "../services/Property";

export const useProperties = (events) => {
    const [properties, setProperties] = useState([
        {"id":1,"address":"","additional":null,"postalCode":86370,"city":"","rent":480.0,"charges":20.0,"deposit":500.0,"available":true}
    ]);
    useEffect(() => {
        GetProperties().then((res) =>setProperties(res.data)) .catch(error => alert(error.message))
    }, [events])

    return {
        properties, setProperties
    };
  };