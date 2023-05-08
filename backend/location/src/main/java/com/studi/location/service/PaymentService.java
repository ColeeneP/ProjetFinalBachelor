package com.studi.location.service;

import com.studi.location.models.Payment;
import com.studi.location.repository.PaymentRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Data
@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public Optional<Payment> getPayment(final Long id) {
        return paymentRepository.findById(id);
    }

    public List<Payment> findByRental_TenantId(final Long id) {
        return paymentRepository.findByRental_TenantId(id);
    }

    public Iterable<Payment> getPayments() {
        return paymentRepository.findAll();
    }

    public void deletePayment(final Long id) {
        paymentRepository.deleteById(id);
    }

    public Payment savePayment(Payment payment) {
        Payment savedPayment = paymentRepository.save(payment);
        return savedPayment;
    }
}
