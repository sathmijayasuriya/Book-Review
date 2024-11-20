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

    // Injecting BCryptPasswordEncoder via constructor
    public UserService(UserDAO userDAO) {
        this.userDAO = userDAO;
        this.passwordEncoder = passwordEncoder;
    }

    // Method to sign up a new user
    public boolean signUp(UserDTO userDTO) {
         //Hash the password before saving it to the database
        String hashedPassword = passwordEncoder.encode(userDTO.getPassword());
        userDTO.setPassword(hashedPassword);

        // Save the user to the database
        int rowsAffected = userDAO.save(userDTO);
        return rowsAffected > 0;
    }

    // Method to authenticate a user during login
    public boolean authenticate(String username, String password) {
        try {
            User user = userDAO.findByUsername(username);
            return passwordEncoder.matches(password, user.getPassword());
        } catch (Exception e) {
            return false;
        }
    }
}
