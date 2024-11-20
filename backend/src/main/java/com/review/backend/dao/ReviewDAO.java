package com.review.backend.dao;

import com.review.backend.model.Review;

import java.util.List;

public interface ReviewDAO {

    int addReview(Review review);
    List<Review> getAllReviews();
    Review getReviewById(Long id);
    int updateReview(Long id, Review review);
    int deleteReview(Long id);

    }
