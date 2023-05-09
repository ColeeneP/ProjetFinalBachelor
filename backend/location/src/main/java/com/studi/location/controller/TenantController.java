package com.studi.location.controller;

import com.studi.location.models.Tenant;
import com.studi.location.service.TenantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.Optional;

@RestController
@CrossOrigin
public class TenantController {

    @Autowired
    private TenantService tenantService;

    /**
     * Create - Add a new tenant
     * @param tenant An object tenant
     * @return The Tenant object saved
     */
    @PostMapping("/api/tenant")
    public Tenant createTenant(@RequestBody Tenant tenant) {
        return tenantService.saveTenant(tenant);
    }

    /**
     * Read - Get one tenant
     * @param id The id of the tenant
     * @return A Tenant object fulfilled
     */
    @GetMapping("/api/tenant/{id}")
    public Tenant getTenant(@PathVariable("id") final Long id) {
        Optional<Tenant> tenant = tenantService.getTenant(id);
        if(tenant.isPresent()) {
            return tenant.get();
        } else {
            return null;
        }
    }

    /**
     * Read - Get all tenants
     * @return - An Iterable object of Tenants fulfilled
     */
    @GetMapping("/api/tenant")
    public Iterable<Tenant> getTenants() {
        return tenantService.getTenants();
    }

    /**
     * Update - Update an existing tenant
     * @param id - The id of the tenant to update
     * @param tenant - The tenant object updated
     * @return
     */
    @PutMapping("/api/tenant/{id}")
    public Tenant updateTenant(@PathVariable("id") final Long id, @RequestBody Tenant tenant) {
        Optional<Tenant> e = tenantService.getTenant(id);
        if(e.isPresent()) {
            Tenant currentTenant = e.get();
            String firstname = tenant.getFirstname();
            if(firstname != null) {
                currentTenant.setFirstname(firstname);
            }
            String lastname = tenant.getLastname();
            if(lastname != null) {
                currentTenant.setLastname(lastname);
            }
            Date birthday = tenant.getBirthday();
            if(birthday != null) {
                currentTenant.setBirthday(birthday);
            }
            String phone = tenant.getPhone();
            if(phone != null) {
                currentTenant.setPhone(phone);
            }
            String email = tenant.getEmail();
            if(email != null) {
                currentTenant.setEmail(email);
            }
            tenantService.saveTenant(currentTenant);
            return currentTenant;
        } else {
            return null;
        }
    }

    /**
     * Delete - Delete a tenant
     * @param id - The id of the tenant to delete
     */
    @DeleteMapping("/api/tenant/{id}")
    public void deleteTenant(@PathVariable("id") final Long id) {
        tenantService.deleteTenant(id);
    }
}
