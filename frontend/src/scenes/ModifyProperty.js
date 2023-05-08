import { useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { UpdateProperty } from "../services/Property";

export default function ModifyProperty() {
    let {id} = useParams();
    const navigate = useNavigate();
    const [address, setAddress] = useState(String);
    const [additional, setAdditional] = useState(String);
    const [postalCode, setPostalCode] = useState(String);
    const [city, setCity] = useState(String);
    const [rent, setRent] = useState(String);
    const [charges, setCharges] = useState(String);
    const [deposit, setDeposit] = useState(String);

    const handleSubmit = (e) => {
        if (address !== null && postalCode !== null && city !== null && rent !== null && charges !== null && deposit !== null) {
            let post = {
                address: address,
                additional: additional,
                postal_code: postalCode,
                city: city,
                rent: rent,
                charges: charges,
                deposit: deposit
            };         
            UpdateProperty(id, post).then((response) => {navigate(`/home`); alert("Bien modifié") }, (error) => { alert(error.response.data.error) });   
        } else {
            alert("Veuillez renseigner tous les champs")
        }
      e.preventDefault();}

    return (
        <div>
          <Header /> 
        <form onSubmit={handleSubmit} class="formulaire">
            <label for="address">Adresse : <input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />                
            </label><br />

            <label for="additional">Complément d'adresse : <input id="additional" type="text" value={additional} onChange={(e) => setAdditional(e.target.value)} />
            </label><br />

            <label for="postalCode">Code postal : <input id="postalCode" type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
            </label><br />

            <label for="city">Ville : <input id="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            </label><br />

            <label for="rent">Loyer : <input id="rent" type="number" value={rent} onChange={(e) => setRent(e.target.value)} />
            </label><br />

            <label for="charges">Charges : <input id="charges" type="number" value={charges} onChange={(e) => setCharges(e.target.value)} />
            </label><br />

            <label for="deposit">Caution : <input id="deposit" type="number" value={deposit} onChange={(e) => setDeposit(e.target.value)} />
            </label><br />

            <button class="submit_button" type='submit'>Valider</button>
        </form>
        </div>
    )
}