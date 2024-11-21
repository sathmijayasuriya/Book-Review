package com.review.backend.dao;

import com.review.backend.dto.UserDTO;
import com.review.backend.model.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;

@Repository
public class UserDAO {

    private final JdbcTemplate jdbcTemplate;

    public UserDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public User findByEmail(String email) {
        String sql = "SELECT * FROM users WHERE email = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{email}, new UserRowMapper());
    }

    public int save(UserDTO userDTO) {
        String sql = "INSERT INTO users (full_name, email, phone_number, password) VALUES (?, ?, ?, ?)";
        return jdbcTemplate.update(sql, userDTO.getFullName(), userDTO.getEmail(), userDTO.getPhoneNumber(), userDTO.getPassword());
    }

    private static class UserRowMapper implements RowMapper<User> {
        @Override
        public User mapRow(ResultSet rs, int rowNum) throws SQLException {
            User user = new User();
            user.setId(rs.getLong("id"));
            user.setFullName(rs.getString("full_name"));
            user.setEmail(rs.getString("email"));
            user.setPhoneNumber(rs.getString("phone_number"));
            user.setPassword(rs.getString("password"));
//            user.setCreatedAt(rs.getTimestamp("created_at"));
            return user;
        }
    }
}

