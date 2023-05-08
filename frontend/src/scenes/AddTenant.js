import { useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CreateTenant } from "../services/Tenants";
import Header from "../components/Header";

export default function AddTenant() {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState(String);
    const [lastname, setLastname] = useState(String);
    const [birthday, setBirthday] = useState(Date);
    const [email, setEmail] = useState(String);
    const [phone, setPhone] = useState(String);

    const handleSubmit = (e) => {
        if (firstname !== null && lastname !== null && birthday !== null && email !== null && phone !== null) {
            let post = {
                firstname: firstname,
                lastname: lastname,
                birthday: birthday,
                email: email,
                phone: phone
            };         
            CreateTenant(post).then((response) => {navigate(`/home`); alert("Locataire ajouté") }, (error) => { alert(error.response.data.error) });   
        } else {
            alert("Veuillez renseigner tous les champs")
        }
      e.preventDefault();}

    return (
        <div>
          <Header /> 
        <form onSubmit={handleSubmit} class="formulaire">
            <label for="firstname">Prénom : <input id="firstname" type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />                
            </label><br />

            <label for="lastname">Nom : <input id="lastname" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
            </label><br />

            <label for="birthday">Date de naissance : <input id="birthday" type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
            </label><br />

            <label for="email"> Email : <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label><br />

            <label for="phone"> Téléphone : <input id="phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label><br />

            <button class="submit_button" type='submit'>Valider</button>
        </form>
        </div>
    )
}