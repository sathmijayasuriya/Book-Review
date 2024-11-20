package com.review.backend.service;

import com.review.backend.dao.ReviewDAO;
import com.review.backend.model.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ReviewServiceImpl implements ReviewService{

    @Autowired
    private ReviewDAO reviewDAO;

    public int addReview(Review review) {
        return reviewDAO.addReview(review);
    }

    public List<Review> getAllReviews() {
        return reviewDAO.getAllReviews();
    }

    public Review getReviewById(Long id) {
        return reviewDAO.getReviewById(id);
    }

    public int updateReview(Long id, Review review) {
        return reviewDAO.updateReview(id, review);
    }

    public int deleteReview(Long id) {
        return reviewDAO.deleteReview(id);
    }
}
