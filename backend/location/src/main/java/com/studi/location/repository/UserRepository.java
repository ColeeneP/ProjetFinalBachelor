package com.studi.location.repository;

import org.springframework.data.repository.CrudRepository;

import com.studi.location.models.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository <User, Long> {
}
