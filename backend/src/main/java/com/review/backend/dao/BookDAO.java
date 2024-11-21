package com.review.backend.dao;


import com.review.backend.model.Book;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BookDAO {
    private final JdbcTemplate jdbcTemplate;

    public BookDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Book> getAllBookTitles() {
        String query = "SELECT id, title FROM books";
        return jdbcTemplate.query(query, new BeanPropertyRowMapper<>(Book.class));
    }
}
