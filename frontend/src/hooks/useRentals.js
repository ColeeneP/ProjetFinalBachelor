import { useState, useEffect } from 'react';
import { GetRentals } from "../services/Rental";

export const useRentals = (events) => {
    const [rentals, setRentals] = useState([
        {
            "id": null,
            "property": {
                "id": null,
                "address": "",
                "additional": "",
                "postalCode": null,
                "city": "",
                "rent": null,
                "charges": null,
                "deposit": null,
                "available": true
            },
            "tenant": {
                "id": 1,
                "firstname": "",
                "lastname": "",
                "birthday": "",
                "phone": "",
                "email": ""
            },
            "deposit": true
        }
    ]);
    useEffect(() => {
        GetRentals().then((res) => setRentals(res.data)) .catch(error => alert(error.message))
    }, [events])

    return {
        rentals, setRentals
    };
  };