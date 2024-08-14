package com.example.demo.service;

import com.example.demo.model.Admin;
import com.example.demo.model.Coupon;
import com.example.demo.repo.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    private final AdminRepo couponRepository;

    @Autowired
    public AdminService(AdminRepo couponRepository) {
        this.couponRepository = couponRepository;
    }

    public List<Admin> getAllCoupons() {
        return couponRepository.findAll();
    }
}
