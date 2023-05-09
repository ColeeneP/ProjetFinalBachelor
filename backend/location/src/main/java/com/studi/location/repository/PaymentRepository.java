package com.studi.location.repository;

import org.springframework.data.repository.CrudRepository;

import com.studi.location.models.Payment;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentRepository extends CrudRepository <Payment, Long> {
    List<Payment> findByRental_TenantId(Long id);
}
