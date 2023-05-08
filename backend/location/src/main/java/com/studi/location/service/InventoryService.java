package com.studi.location.service;

import com.studi.location.models.Inventory;
import com.studi.location.repository.InventoryRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Data
@Service
public class InventoryService {

    @Autowired
    private InventoryRepository inventoryRepository;

    public Optional<Inventory> getInventory(final Long id) {
        return inventoryRepository.findById(id);
    }

    public List<Inventory> findByPropertyId(final Long id) {
        return inventoryRepository.findByPropertyId(id);
    }

    public Iterable<Inventory> getAllInventories() {
        return inventoryRepository.findAll();
    }

    public void deleteInventory(final Long id) {
        inventoryRepository.deleteById(id);
    }

    public Inventory saveInventory(Inventory inventory) {
        Inventory savedInventory = inventoryRepository.save(inventory);
        return savedInventory;
    }
}
