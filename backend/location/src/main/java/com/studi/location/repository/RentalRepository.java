package com.studi.location.repository;

import org.springframework.data.repository.CrudRepository;

import com.studi.location.models.Rental;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RentalRepository extends CrudRepository <Rental, Long> {
    List<Rental> findByTenantId(Long id);
}
