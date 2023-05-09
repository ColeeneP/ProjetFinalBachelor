package com.studi.location.controller;

import com.studi.location.models.Property;
import com.studi.location.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
public class PropertyController {

    @Autowired
    private PropertyService propertyService;

    /**
     * Create - Add a new property
     * @param property An object property
     * @return The property object saved
     */
    @PostMapping("/api/property")
    public ResponseEntity<Property>createProperty(@RequestBody Property property) {
        try {
            propertyService.saveProperty(new Property(property.getAddress(), property.getAdditional(), property.getPostalCode(), property.getCity(), property.getRent(), property.getCharges(), property.getDeposit(), property.getAvailable()));
            return new ResponseEntity<>(property, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Read - Get one property
     * @param id The id of the property
     * @return A Property object fulfilled
     */
    @GetMapping("/api/property/{id}")
    public Property getProperty(@PathVariable("id") final Long id) {
        Optional<Property> property = propertyService.getProperty(id);
        if(property.isPresent()) {
            return property.get();
        } else {
            return null;
        }
    }

    /**
     * Read - Get all properties
     * @return - An Iterable object of Properties fullfilled
     */
    @GetMapping("/api/property")
    public Iterable<Property> getAllProperties() {
        return propertyService.getAllProperties();
    }

    /**
     * Update - Update an existing property
     * @param id - The id of the property to update
     * @param property - The property object updated
     * @return
     */
    @PutMapping("/api/property/{id}")
    public Property updateProperty(@PathVariable("id") final Long id, @RequestBody Property property) {
        Optional<Property> e = propertyService.getProperty(id);
        if(e.isPresent()) {
            Property currentProperty = e.get();
            String address = property.getAddress();
            if(address != null) {
                currentProperty.setAddress(address);
            }
            String additional = property.getAdditional();
            if(additional != null) {
                currentProperty.setAdditional(additional);
            }
            Integer postalCode = property.getPostalCode();
            if(postalCode != null) {
                currentProperty.setPostalCode(postalCode);
            }
            String city = property.getCity();
            if(city != null) {
                currentProperty.setCity(city);
            }
            Float rent = property.getRent();
            if(rent != null) {
                currentProperty.setRent(rent);
            }
            Float charges = property.getCharges();
            if(charges != null) {
                currentProperty.setCharges(charges);
            }
            Float deposit = property.getDeposit();
            if(deposit != null) {
                currentProperty.setDeposit(deposit);
            }
            Boolean available = property.getAvailable();
            if(available != null) {
                currentProperty.setAvailable(available);
            }
            propertyService.saveProperty(currentProperty);
            return currentProperty;
        } else {
            return null;
        }
    }

    /**
     * Delete - Delete a property
     * @param id - The id of the property to delete
     */
    @DeleteMapping("/api/property/{id}")
    public void deleteProperty(@PathVariable("id") final Long id) {
        propertyService.deleteProperty(id);
    }
}
