package com.studi.location.repository;

import org.springframework.data.repository.CrudRepository;

import com.studi.location.models.Inventory;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InventoryRepository extends CrudRepository <Inventory, Long> {
    List<Inventory> findByPropertyId(Long id);

}
