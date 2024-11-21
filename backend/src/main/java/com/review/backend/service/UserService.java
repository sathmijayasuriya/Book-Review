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

    public boolean signUp(UserDTO userDTO) {
        String hashedPassword = passwordEncoder.encode(userDTO.getPassword());
        userDTO.setPassword(hashedPassword);

        int rowsAffected = userDAO.save(userDTO);
        return rowsAffected > 0;
    }

    public boolean authenticate(String email, String password) {
        try {
            User user = userDAO.findByEmail(email);
            return passwordEncoder.matches(password, user.getPassword());
        } catch (Exception e) {
            return false;
        }
    }
}