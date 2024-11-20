package com.review.backend.service;

import com.review.backend.model.Review;

import java.util.List;

public interface ReviewService {

    int addReview(Review review);
    List<Review> getAllReviews();
    Review getReviewById(Long id);
    int updateReview(Long id, Review review);
    int deleteReview(Long id) ;

    }
