package com.studi.location.service;

import com.studi.location.models.Property;
import com.studi.location.repository.PropertyRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Data
@Service
public class PropertyService {

    @Autowired
    private PropertyRepository propertyRepository;

    public Optional<Property> getProperty(final Long id) {
        return propertyRepository.findById(id);
    }

    public Iterable<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    public void deleteProperty(final Long id) {
        propertyRepository.deleteById(id);
    }

    public Property saveProperty(Property property) {
        Property savedProperty = propertyRepository.save(property);
        return savedProperty;
    }
}
