package com.review.backend.service;

import com.review.backend.dao.UserDAO;
import com.review.backend.dto.UserDTO;
import com.review.backend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserService {

    private final UserDAO userDAO;
    @Autowired
    @Qualifier("customPasswordEncoder")
    private PasswordEncoder passwordEncoder;

    public UserService(UserDAO userDAO) {
        this.userDAO = userDAO;
        this.passwordEncoder = passwordEncoder;
    }

    public User signUp(UserDTO userDTO) {
        // Hash the password
        String hashedPassword = passwordEncoder.encode(userDTO.getPassword());
        userDTO.setPassword(hashedPassword);

        // Save the user in the database
        int rowsAffected = userDAO.save(userDTO);

        if (rowsAffected > 0) {
            // Fetch the saved user details
            return userDAO.findByEmail(userDTO.getEmail());
        } else {
            return null;
        }
    }

    public User authenticate(String email, String password) {
        try {
            User user = userDAO.findByEmail(email);

            // Check if the password matches
            if (passwordEncoder.matches(password, user.getPassword())) {
                return user; // Return the authenticated user
            }
        } catch (Exception e) {
            // Handle exception (e.g., user not found)
        }
        return null;
    }
}