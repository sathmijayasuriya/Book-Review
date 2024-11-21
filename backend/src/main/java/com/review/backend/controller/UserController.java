package com.review.backend.controller;

import com.review.backend.constants.RestURI;
import com.review.backend.dto.LoginDTO;
import com.review.backend.dto.UserDTO;
import com.review.backend.dto.UserResponseDTO;
import com.review.backend.model.User;
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
    public ResponseEntity<?> signUp(@RequestBody UserDTO userDTO) {
        if (!userDTO.getPassword().equals(userDTO.getConfirmPassword())) {
            return ResponseEntity.status(400).body("Passwords do not match");
        }

        User createdUser = userService.signUp(userDTO);
        if (createdUser != null) {
            UserResponseDTO response = new UserResponseDTO(
                    createdUser.getId(),
                    createdUser.getFullName(),
                    createdUser.getEmail(),
                    createdUser.getPhoneNumber()
            );
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(401).body("User sign-up failed");
        }
    }

    @PostMapping(RestURI.LOGIN)
    public ResponseEntity<?> login(@RequestBody LoginDTO loginDTO) {
        User authenticatedUser = userService.authenticate(loginDTO.getEmail(), loginDTO.getPassword());
        if (authenticatedUser != null) {
            UserResponseDTO response = new UserResponseDTO(
                    authenticatedUser.getId(),
                    authenticatedUser.getFullName(),
                    authenticatedUser.getEmail(),
                    authenticatedUser.getPhoneNumber()
            );
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }

}
