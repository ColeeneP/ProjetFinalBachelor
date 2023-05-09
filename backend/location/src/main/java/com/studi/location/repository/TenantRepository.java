package com.studi.location.repository;

import org.springframework.data.repository.CrudRepository;

import com.studi.location.models.Tenant;
import org.springframework.stereotype.Repository;

@Repository
public interface TenantRepository extends CrudRepository <Tenant, Long> {
}
