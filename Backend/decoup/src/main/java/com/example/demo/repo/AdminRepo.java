package com.example.demo.repo;

import com.example.demo.model.Coupon;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepo extends JpaRepository<Coupon, Long> {
}
