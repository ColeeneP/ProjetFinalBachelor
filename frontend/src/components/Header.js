import { Link } from "react-router-dom";

export default function Header() {

    return(
        <header className="App-header">
        <Link to={`/home`}><h1>Gest'Loc</h1></Link>
            <nav class="desktop_nav">
                <ul>
                    <Link to={`/home`}><li>Accueil</li></Link>
                    <Link to={`/tenants`}><li>Nos locataires</li></Link>
                    <Link to={`/property`}><li>Nos biens</li></Link>
                </ul>
            </nav>
            <nav class="mobile_nav">
                <div><div><i class="fa-solid fa-bars"></i></div>
                <ul>
                    <Link to={`/home`}><li>Accueil</li></Link>
                    <Link to={`/tenants`}><li>Nos locataires</li></Link>
                    <Link to={`/property`}><li>Nos biens</li></Link>
                </ul></div>
            </nav>
        </header>
    )
};