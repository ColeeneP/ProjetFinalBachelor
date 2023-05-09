package com.studi.location.models;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Getter
@Setter
@Table(name = "property")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "property")
    private List<Rental> rentals;

    @OneToMany(mappedBy = "property")
    private List<Inventory> inventories;

    private String address;

    private String additional;

    @Column(name="postal_code")
    private Integer postalCode;

    private String city;

    private Float rent;

    private Float charges;

    private Float deposit;

    private Boolean available;

    public Property(String address, String additional, Integer postalCode, String city, Float rent, Float charges, Float deposit, Boolean available) {
        this.address = address;
        this.additional = additional;
        this.postalCode = postalCode;
        this.city = city;
        this.rent = rent;
        this.charges = charges;
        this.deposit = deposit;
        this.available = available;
    }

    public Property() {

    }
}
