import { useParams } from "react-router-dom";
import { UpdateRental } from "../services/Rental";

export default function Rental() {
    const[rental, setRental] = useState([{flat: {address: '2 Rue du Maréchal Juin'}, tenant: {firstname: 'John', lastname: 'Doe'}, deposit: true}]);
    let {id} = useParams();

    // useEffect(() => {
    //     GetRental(id).then((res) => setRentals(res.content).catch(error => alert(error.message)));
    //      if(rental.deposit == false) {
    //         alert('En attente du dépôt de garantie')
    //      }
    // })

    function update() {
        const post = {
            deposit: !rental.deposit
        }
        UpdateRental(id, post).then(() => alert('Modification réussie !')).catch(error => alert(error.message));
    }
 
    return (
        <div>
            <button onClick={update}>Modifier l'état du dépôt de garantie</button>
            <h1>{rental.tenant.firstname + ' ' + rental.tenant.lastname + ' loue le bien situé au ' + rental.flat.address}</h1>    
        </div>
    );
};