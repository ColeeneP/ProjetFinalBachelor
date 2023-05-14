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
@Table(name = "payment")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial")
    private Long id;

    @ManyToOne
    @JoinColumn(name="rental", insertable=true, updatable=true)
    private Rental rental;

    private Date date;

    private String origin;

    private String amount;

    public Payment(Rental rental, Date date, String origin, String amount) {
        this.rental = rental;
        this.date = date;
        this.origin = origin;
        this.amount = amount;
    }

    public Payment() {

    }
}
