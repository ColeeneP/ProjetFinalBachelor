package com.studi.location.service;

import com.studi.location.models.Rental;
import com.studi.location.repository.RentalRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Data
@Service
public class RentalService {

    @Autowired
    private RentalRepository rentalRepository;

    public Optional<Rental> getRental(final Long id) {
        return rentalRepository.findById(id);
    }

    public List<Rental> findByTenantId(final Long id) {
        return rentalRepository.findByTenantId(id);
    }

    public Iterable<Rental> getRentals() {
        return rentalRepository.findAll();
    }

    public void deleteRental(final Long id) {
        rentalRepository.deleteById(id);
    }

    public Rental saveRental(Rental rental) {
        Rental savedRental = rentalRepository.save(rental);
        return savedRental;
    }
}
