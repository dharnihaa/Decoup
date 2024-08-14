package com.example.demo.repo;

import com.example.demo.model.usermodel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface userrepo extends JpaRepository<usermodel, Long> {
    Optional<usermodel> findByEmail(String email);
}
