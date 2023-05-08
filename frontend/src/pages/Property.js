import { useProperties } from "../hooks/useProperties";
import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Property() {
    const {properties, setProperties} = useProperties();

    return (
        <div>
        <Header />
        <main id="main_property">
        <h2>Nos biens</h2>

        <section class="property_section">
            {properties.map((property) => {
                if(property.available == false) {
                    return (
                        <Link to={`/oneProperty/${property.id}`}><div class="property_card">
                        <div class="card_image">
                        <img src="https://as2.ftcdn.net/v2/jpg/04/39/24/79/1000_F_439247968_J5nC39sqagXLVBTRGXlt2HZgaf3LDriM.jpg" />
                        </div>
                        <div class="card_info">
                            <div class="address">{property.address}<br /> {property.additional} <br />{property.postalCode} {property.city}</div>
                            <div class="cost">Loyer: {property.rent}€<br />Charges: {property.charges}€</div>
                                <div class="deposit">Caution: {property.deposit}€</div>
                                <div class="availability">Non disponible</div>
                        </div>
                        </div></Link>          
                )} else {
                    return (
                        <Link to={`/oneProperty/${property.id}`}><div class="property_card available">
                        <div class="card_image">
                        <img src="https://as2.ftcdn.net/v2/jpg/04/39/24/79/1000_F_439247968_J5nC39sqagXLVBTRGXlt2HZgaf3LDriM.jpg" />
                        </div>
                        <div class="card_info">
                            <div class="address">{property.address}<br /> {property.additional} <br />{property.postalCode} {property.city}</div>
                            <div class="cost">Loyer: {property.rent}€<br />Charges: {property.charges}€</div>
                                <div class="deposit">Caution: {property.deposit}€</div>
                                <div class="availability">Disponible</div>
                        </div>
                        </div></Link>
                    )}
            })}
        </section>
        </main>
        </div>
    );
};