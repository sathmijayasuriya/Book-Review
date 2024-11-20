package com.review.backend.dao;


import com.review.backend.model.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class ReviewDAOImpl implements ReviewDAO{

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // Add Review
    public int addReview(Review review) {
        String sql = "INSERT INTO reviews (user_id, book_id, title, author, rating, review_text) " +
                "VALUES (?, ?, ?, ?, ?, ?)";
        return jdbcTemplate.update(sql, review.getUserId(), review.getBookId(),
                review.getTitle(), review.getAuthor(), review.getRating(), review.getReviewText());
    }

    // Get All Reviews
    public List<Review> getAllReviews() {
        String sql = "SELECT * FROM reviews";
        return jdbcTemplate.query(sql, new ReviewRowMapper());
    }

    // Get Review by ID
    public Review getReviewById(Long id) {
        String sql = "SELECT * FROM reviews WHERE id = ?";
        return jdbcTemplate.queryForObject(sql, new ReviewRowMapper(), id);
    }

    // Update Review
    public int updateReview(Long id, Review review) {
        String sql = "UPDATE reviews SET title = ?, author = ?, rating = ?, review_text = ? WHERE id = ?";
        return jdbcTemplate.update(sql, review.getTitle(), review.getAuthor(), review.getRating(),
                review.getReviewText(), id);
    }

    // Delete Review
    public int deleteReview(Long id) {
        String sql = "DELETE FROM reviews WHERE id = ?";
        return jdbcTemplate.update(sql, id);
    }

    private static class ReviewRowMapper implements RowMapper<Review> {
        @Override
        public Review mapRow(ResultSet rs, int rowNum) throws SQLException {
            Review review = new Review();
            review.setId(rs.getLong("id"));
            review.setUserId(rs.getLong("user_id"));
            review.setBookId(rs.getLong("book_id"));
            review.setTitle(rs.getString("title"));
            review.setAuthor(rs.getString("author"));
            review.setRating(rs.getInt("rating"));
            review.setReviewText(rs.getString("review_text"));
            review.setDateAdded(rs.getTimestamp("date_added"));
            return review;
        }
    }
}
