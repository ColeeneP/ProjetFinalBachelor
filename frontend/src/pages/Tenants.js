import { useTenants } from "../hooks/useTenants";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Tenants() {
    const {tenants} = useTenants();

    return(
        <div>
            <Header />
            <img class="background-image" src="https://as2.ftcdn.net/v2/jpg/00/97/79/05/1000_F_97790501_WzLIeayLrlQotVDdM6gERYVeRGQJ5GKR.jpg" />
            <main id="main_tenant">
                <h2>Nos locataires</h2>

                <section class="tenants_section mobile_tenant">
                {tenants.map(tenant => {
                    return(
                        <><Link to={`/oneTenant/${tenant.id}`}><button class="adding_button">{tenant.firstname + ' ' + tenant.lastname} <i class="fa-solid fa-user"></i></button></Link></>   
                    )                   
                    })}
                </section>
                <section class="tenants_section desktop_tenant">
                {tenants.map(tenant => {
                    return(
                        <><Link to={`/oneTenant/${tenant.id}`}><button class="adding_button">
                            <div class="text_button">{tenant.firstname + ' ' + tenant.lastname + ' '}</div> 
                            <div class="text_button">{tenant.email + ' '}</div> 
                            <div class="text_button">{tenant.phone}</div> 
                            <i class="fa-solid fa-user"></i></button></Link></>   
                    )                   
                    })}
                </section>
            </main>
        </div>
    );
};