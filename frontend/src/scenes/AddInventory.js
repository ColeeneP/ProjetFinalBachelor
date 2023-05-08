import { useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { CreateInventory } from "../services/Inventory";

export default function AddInventory() {
    let {id} = useParams();
    const navigate = useNavigate();

    const [property, setProperty] = id;
    const [status, setStatus] = useState(String);
    const [date, setDate] = useState(Date);
    const [notes, setNotes] = useState(String);

    const handleSubmit = (e) => {
        
        if (property !== null && date !== null && status !== null && notes !== null) {
            let post = {
                Property: parseInt(property),
                status: status,
                date: date,
                notes: notes
            };       
            console.log(post);  
            CreateInventory(post).then((response) => {navigate(`/home`); alert("Etat des lieux ajouté") }, (error) => { alert(error.message) });   
        } else {
            alert("Veuillez renseigner tous les champs")
        }
      e.preventDefault();}

    return (
        <div>
          <Header /> 
        <form onSubmit={handleSubmit} class="formulaire">
            <label for="status">Etat des lieux : 
            <select name='status' id='status' onChange={(e) => setStatus(e.target.value)}> 
                <option key="" value="">Entrant/Sortant</option>
                <option key="ingoing" value="ingoing">Entrant</option>
                <option key="outgoing" value="outgoing">Sortant</option>
            </select >                
            </label><br />

            <label for="date">Date : <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </label><br />

            <label for="note">Notes : <input id="note" type="text" value={notes} onChange={(e) => setNotes(e.target.value)} />
            </label><br />

            <button class="submit_button" type='submit'>Valider</button>
        </form>
        </div>
    )
}