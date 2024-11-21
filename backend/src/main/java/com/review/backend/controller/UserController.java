package com.review.backend.controller;

import com.review.backend.constants.RestURI;
import com.review.backend.dto.LoginDTO;
import com.review.backend.dto.UserDTO;
import com.review.backend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping(RestURI.LOGIN_BASE_URL)
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(RestURI.SIGN_UP)
    public ResponseEntity<String> signUp(@RequestBody UserDTO userDTO) {
        if (!userDTO.getPassword().equals(userDTO.getConfirmPassword())) {
            return ResponseEntity.status(400).body("Passwords do not match");
        }

        boolean isSuccessful = userService.signUp(userDTO);
        if (isSuccessful) {
            return ResponseEntity.ok("User signed up successfully");
        } else {
            return ResponseEntity.status(400).body("User sign-up failed");
        }
    }

    @PostMapping(RestURI.LOGIN)
    public ResponseEntity<String> login(@RequestBody LoginDTO loginDTO) {
        boolean isAuthenticated = userService.authenticate(loginDTO.getEmail(), loginDTO.getPassword());
        if (isAuthenticated) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
}
