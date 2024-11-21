package com.review.backend.dao;


import com.review.backend.dto.ReviewResponseDTO;
import com.review.backend.model.Review;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;


import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class ReviewDAOImpl implements ReviewDAO{

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;  // Use NamedParameterJdbcTemplate

    private final ModelMapper modelMapper;

    private static final Logger logger = LoggerFactory.getLogger(ReviewDAOImpl.class);

    public ReviewDAOImpl(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    // Add Review
    @Override
    public void addReview(Review review) {
        long userId = review.getUser_id();
        Date currentDate = new Date(); // This will include the time component

        // Updated SQL query to work with LocalDate (DATE type in database)
        String sql = "INSERT INTO reviews (user_id, book_id, title, author, rating, review_text, date_added) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?)";

        int rowsAffected = jdbcTemplate.update(sql,
                review.getUser_id(),
                review.getBook_id(),
                review.getTitle(),
                review.getAuthor(),
                review.getRating(),
                review.getReview_text(),
                currentDate);  // Pass LocalDate instead of Timestamp

        if (rowsAffected > 0) {
            logger.info("Review details added successfully for user_id: {}", userId);
        } else {
            logger.warn("No matching records found to add document Review details for user_id: {}", userId);
            throw new EmptyResultDataAccessException(1);
        }
    }

    // Get All Reviews
    @Override
    public List<Review> getAllReviews() {
        String sql = "SELECT * FROM reviews";
        return jdbcTemplate.query(sql, new ReviewRowMapper());
    }

    // Get Review by ID
    @Override
    public Review getReviewById(Long id) {
        String sql = "SELECT * FROM reviews WHERE id = ?";
        return jdbcTemplate.queryForObject(sql, new ReviewRowMapper(), id);
    }

    @Override
    public List<Review> getReviewsByUser(Long id) {
        String sql = "SELECT * FROM reviews WHERE user_id = ?";
        return jdbcTemplate.query(sql, new ReviewRowMapper(), id);
    }


    // Update Review
    @Override
    public int updateReview(Long id, Review review) {
        String sql = "UPDATE reviews SET  title = ?, author = ?, rating = ?, review_text = ? WHERE id = ?";
        return jdbcTemplate.update(sql, review.getTitle(), review.getAuthor(), review.getRating(),
                review.getReview_text(), id);
    }

    // Delete Review
    @Override
    public int deleteReview(Long id) {
        String sql = "DELETE FROM reviews WHERE id = ?";
        return jdbcTemplate.update(sql, id);
    }

    private static class ReviewRowMapper implements RowMapper<Review> {
        @Override
        public Review mapRow(ResultSet rs, int rowNum) throws SQLException {
            Review review = new Review();
            review.setId(rs.getLong("id"));
            review.setUser_id(rs.getLong("user_id"));
            review.setBook_id(rs.getLong("book_id"));
            review.setTitle(rs.getString("title"));
            review.setAuthor(rs.getString("author"));
            review.setRating(rs.getInt("rating"));
            review.setReview_text(rs.getString("review_text"));
            review.setDate_added(rs.getDate("date_added"));  // Mapping Date field

            return review;
        }
    }
//    //filter
//    public List<Review> filterReviewsByRatingAndDate(int rating, LocalDate dateAdded) {
//        String sql = "SELECT * FROM reviews WHERE rating >= ? AND DATE(date_added) = ?";
//        return jdbcTemplate.query(sql, new Object[]{rating, dateAdded}, new BeanPropertyRowMapper<>(Review.class));
//    }

    @Override
    public List<Review> filterByCriteria(Integer rating, Date dateAdded, String title) {
        StringBuilder query = new StringBuilder("SELECT * FROM reviews WHERE 1=1");
        Map<String, Object> params = new HashMap<>();

        if (rating != null) {
            query.append(" AND rating = :rating");
            params.put("rating", rating);
        }
        if (dateAdded != null) {
            query.append(" AND date_added = :dateAdded");
            params.put("dateAdded", dateAdded);
        }
        if (title != null && !title.isEmpty()) {
            query.append(" AND LOWER(title) LIKE LOWER(:title)");
            params.put("title", "%" + title + "%");
        }

        return namedParameterJdbcTemplate.query(query.toString(), params, new BeanPropertyRowMapper<>(Review.class));
    }
    private ReviewResponseDTO convertToResponseDTO(Review review) {
        return modelMapper.map(review, ReviewResponseDTO.class);
    }


}
