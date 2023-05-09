package com.studi.location.controller;

import com.studi.location.models.Inventory;
import com.studi.location.models.Rental;
import com.studi.location.models.Tenant;
import com.studi.location.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class InventoryController {

    @Autowired
    private InventoryService inventoryService;

    /**
     * Create - Add a new inventory
     * @param inventory An object inventory
     * @return The inventory object saved
     */
    @PostMapping("/api/inventory")
    public Inventory createInventory(@RequestBody Inventory inventory) {
        return inventoryService.saveInventory(inventory);
    }

    /**
     * Read - Get one inventory
     * @param id The id of the inventory
     * @return An Inventory object fulfilled
     */
    @GetMapping("/api/inventory/{id}")
    public Inventory getInventory(@PathVariable("id") final Long id) {
        Optional<Inventory> inventory = inventoryService.getInventory(id);
        if (inventory.isPresent()) {
            return new ResponseEntity<>(inventory.get(), HttpStatus.OK).getBody();
        } else {
            return null;
        }
    }

    /**
     * Read - Get all inventories' property
     * @param id The id of the property
     * @return An Inventory object fulfilled
     */
    @GetMapping("/api/inventorybyproperty/{id}")
    public ResponseEntity<List<Inventory>> findByProperty(@PathVariable("id") final Long id) {
        List<Inventory> inventory = inventoryService.findByPropertyId(id);
            return new ResponseEntity<>(inventoryService.findByPropertyId(id), HttpStatus.OK);
    }

    /**
     * Read - Get all inventories
     * @return - An Iterable object of Inventories fulfilled
     */
    @GetMapping("/api/inventory")
    public Iterable<Inventory> getAllInventories() {
        return inventoryService.getAllInventories();
    }

    /**
     * Update - Update an existing inventory
     * @param id - The id of the inventory to update
     * @param inventory - The inventory object updated
     * @return
     */
    @PutMapping("/api/inventory/{id}")
    public Inventory updateInventory(@PathVariable("id") final Long id, @RequestBody Inventory inventory) {
        Optional<Inventory> e = inventoryService.getInventory(id);
        if(e.isPresent()) {
            Inventory currentInventory = e.get();

            Inventory.Status status = inventory.getStatus();
            if(status != null) {
                currentInventory.setStatus(status);
            }
            Date date = inventory.getDate();
            if(date != null) {
                currentInventory.setDate(date);
            }
            String notes = inventory.getNotes();
            if(notes != null) {
                currentInventory.setNotes(notes);
            }
            inventoryService.saveInventory(currentInventory);
            return currentInventory;
        } else {
            return null;
        }
    }

    /**
     * Delete - Delete an inventory
     * @param id - The id of the inventory to delete
     */
    @DeleteMapping("/api/inventory/{id}")
    public void deleteInventory(@PathVariable("id") final Long id) {
        inventoryService.deleteInventory(id);
    }
}
