import { useState, useEffect } from 'react';
import { GetPayments } from "../services/Payments";

export const usePayments = (events) => {
    const [payments, setPayments] = useState([
        {"id":1,
            "rental":{"id":1,"property":{"id":1,"address":"","additional":null,"postalCode":86370,"city":"","rent":480.0,"charges":20.0,"deposit":500.0,"available":true},
            "tenant":{"id":1,"firstname":"","lastname":"","birthday":"","phone":"","email":""},"deposit":true},
        "date":"","origin":"","amount":""}
    ]);
    useEffect(() => {
        GetPayments().then((res) => setPayments(res.data)) .catch(error => alert(error.message))
    }, [events])

    return {
        payments, setPayments
    };
  };