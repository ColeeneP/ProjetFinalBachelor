package com.studi.location.controller;

import com.studi.location.models.Payment;
import com.studi.location.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    /**
     * Create - Add a new payment
     * @param payment An object payment
     * @return The payment object saved
     */
    @PostMapping("/api/payment")
    public ResponseEntity<Payment>createPayment(@RequestBody Payment payment) {
        System.out.println(payment);
        try {
            paymentService.savePayment(payment);
            return new ResponseEntity<>(payment, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Read - Get one payment
     * @param id The id of the payment
     * @return A Payment object fulfilled
     */
    @GetMapping("/api/payment/{id}")
    public Payment getPayment(@PathVariable("id") final Long id) {
        Optional<Payment> payment = paymentService.getPayment(id);
        if(payment.isPresent()) {
            return payment.get();
        } else {
            return null;
        }
    }

    /**
     * Read - Get all payments' rental
     * @param id The id of the tenant's rental
     * @return An Payment object fulfilled
     */
    @GetMapping("/api/paymentbytenant/{id}")
    public ResponseEntity<List<Payment>> findByRental_TenantId(@PathVariable("id") final Long id) {
        List<Payment> payment = paymentService.findByRental_TenantId(id);
        return new ResponseEntity<>(paymentService.findByRental_TenantId(id), HttpStatus.OK);
    }

    /**
     * Read - Get all payments
     * @return - An Iterable object of Payments fulfilled
     */
    @GetMapping("/api/payment")
    public Iterable<Payment> getPayments() {
        return paymentService.getPayments();
    }

    /**
     * Update - Update an existing payment
     * @param id - The id of the payment to update
     * @param payment - The payment object updated
     * @return
     */
    @PutMapping("/api/payment/{id}")
    public Payment updatePayment(@PathVariable("id") final Long id, @RequestBody Payment payment) {
        Optional<Payment> e = paymentService.getPayment(id);
        if(e.isPresent()) {
            Payment currentPayment = e.get();
            Date date = payment.getDate();
            if(date != null) {
                currentPayment.setDate(date);
            }
            String origin = payment.getOrigin();
            if(origin != null) {
                currentPayment.setOrigin(origin);
            }
            String amount = payment.getAmount();
            if(amount != null) {
                currentPayment.setAmount(amount);
            }
            paymentService.savePayment(currentPayment);
            return currentPayment;
        } else {
            return null;
        }
    }

    /**
     * Delete - Delete a payment
     * @param id - The id of the payment to delete
     */
    @DeleteMapping("/api/payment/{id}")
    public void deletePayment(@PathVariable("id") final Long id) {
        paymentService.deletePayment(id);
    }
}
