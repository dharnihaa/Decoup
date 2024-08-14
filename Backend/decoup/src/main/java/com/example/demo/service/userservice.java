package com.example.demo.service;

import com.example.demo.model.usermodel;
import com.example.demo.repo.userrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class userservice {

    @Autowired
    private userrepo userRepository;

    public Optional<usermodel> findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public usermodel registerUser(usermodel user) {
        return userRepository.save(user);
    }

    public usermodel authenticateUser(String email, String password) {
        Optional<usermodel> user = userRepository.findByEmail(email);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return user.get();
        }
        return null;
    }
}
