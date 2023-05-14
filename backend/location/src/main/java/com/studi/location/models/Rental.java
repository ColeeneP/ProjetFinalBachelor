package com.studi.location.models;

import lombok.*;
import org.hibernate.procedure.ProcedureOutputs;

import javax.persistence.*;

@Data
@Entity
@Getter
@Setter
@Table(name = "rental")
public class Rental {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="property", insertable=true, updatable=true)
    private Property property;

    @ManyToOne
    @JoinColumn(name="tenant", insertable=true, updatable=true)
    private Tenant tenant;

    private Boolean deposit;

    public Rental(Property property, Tenant tenant,Boolean deposit){
        this.deposit = deposit;
        this.property = property;
        this.tenant = tenant;
    }

    public Rental(){}
}
