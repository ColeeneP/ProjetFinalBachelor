package com.studi.location.models;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Data
@Entity
@Getter
@Setter
@Table(name = "inventory")
public class Inventory {

    public enum Status {
        ingoing,
        outgoing
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="property", insertable=true, updatable=true)
    private Property property;

    @Enumerated(EnumType.STRING)
    private Status status;

    private Date date;

    private String notes;

    public Inventory(Property property, Status status, Date date, String notes) {
        this.property = property;
        this.status = status;
        this.date = date;
        this.notes = notes;
    }

    public Inventory() {

    }
}
