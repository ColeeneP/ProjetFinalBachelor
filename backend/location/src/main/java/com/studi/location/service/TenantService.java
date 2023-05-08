package com.studi.location.service;

import com.studi.location.models.Tenant;
import com.studi.location.repository.TenantRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Data
@Service
public class TenantService {

    @Autowired
    private TenantRepository tenantRepository;

    public Optional<Tenant> getTenant(final Long id) {
        return tenantRepository.findById(id);
    }

    public Iterable<Tenant> getTenants() {
        return tenantRepository.findAll();
    }

    public void deleteTenant(final Long id) {
        tenantRepository.deleteById(id);
    }

    public Tenant saveTenant(Tenant tenant) {
        Tenant savedTenant = tenantRepository.save(tenant);
        return savedTenant;
    }
}
