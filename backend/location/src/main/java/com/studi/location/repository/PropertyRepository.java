package com.studi.location.repository;

import org.springframework.data.repository.CrudRepository;

import com.studi.location.models.Property;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyRepository extends CrudRepository <Property, Long> {

}
