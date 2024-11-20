package com.review.backend.dao;

import com.review.backend.model.Review;

import java.util.Date;
import java.util.List;

public interface ReviewDAO {

    void addReview(Review review);
    List<Review> getAllReviews();
    Review getReviewById(Long id);
    int updateReview(Long id, Review review);
    int deleteReview(Long id);
//    List<Review> filterReviewsByRatingAndDate(Integer rating, Date dateAdded) ;
    List<Review> filterByCriteria(Integer rating, Date dateAdded, String title);


    }
