package com.example.demo.controller;

import com.example.demo.model.usermodel;
import com.example.demo.service.userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class usercontroller {

    @Autowired
    private userservice userService;

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody usermodel signUpRequest) {
        try {
            // Check if the email already exists
            if (userService.findUserByEmail(signUpRequest.getEmail()).isPresent()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email already in use");
            }

            // Register the new user
            usermodel newUser = userService.registerUser(signUpRequest);
            String redirectUrl = determineRedirectUrl(newUser.getEmail());
            return ResponseEntity.ok().body(redirectUrl);
        } catch (Exception e) {
            // Handle unexpected errors
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred: " + e.getMessage());
        }
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@RequestBody usermodel signInRequest) {
        try {
            // Validate user credentials
            usermodel user = userService.authenticateUser(signInRequest.getEmail(), signInRequest.getPassword());
            if (user != null) {
                String redirectUrl = determineRedirectUrl(user.getEmail());
                return ResponseEntity.ok().body(redirectUrl);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password.");
            }
        } catch (Exception e) {
            // Handle unexpected errors
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred: " + e.getMessage());
        }
    }

    private String determineRedirectUrl(String email) {
        if (email.contains("admin")) {
            return "/admin-dashboard";
        } else if (email.contains("ajio") || email.contains("myntra") || email.contains("amazon") || email.contains("zomato")) {
            return "/merchant-dashboard";
        } else {
            return "/";
        }
    }
}
