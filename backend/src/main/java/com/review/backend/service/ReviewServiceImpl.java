package com.review.backend.service;

import com.review.backend.dao.ReviewDAO;
import com.review.backend.dto.ReviewDTO;
import com.review.backend.dto.ReviewRequestDTO;
import com.review.backend.dto.ReviewResponseDTO;
import com.review.backend.model.Review;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

//import java.sql.Date;
import java.util.*;
import java.util.stream.Collectors;

@Service
@Transactional
public class ReviewServiceImpl implements ReviewService{

    private static final Logger logger = LoggerFactory.getLogger(ReviewServiceImpl.class);
    private final ModelMapper modelMapper;
    @Autowired
    private ReviewDAO reviewDAO;

    public ReviewServiceImpl(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public void addReview(ReviewDTO reviewDTO) {
        Review review = modelMapper.map(reviewDTO,Review.class);
        reviewDAO.addReview(review);
    }

    // Get All Reviews
    public List<ReviewResponseDTO> getAllReviews() {
        List<Review> reviews = reviewDAO.getAllReviews();
        return reviews.stream()
                .map(review -> modelMapper.map(review, ReviewResponseDTO.class))
                .collect(Collectors.toList());
    }

    // Get Review by ID
    public ReviewResponseDTO getReviewById(Long id) {
        Review review = reviewDAO.getReviewById(id);
        return modelMapper.map(review, ReviewResponseDTO.class);
    }
    // Update Review
    public void updateReview(Long id, ReviewRequestDTO reviewRequestDTO) {
        Review review = modelMapper.map(reviewRequestDTO, Review.class);
        reviewDAO.updateReview(id, review);
    }

    // Delete Review
    public void deleteReview(Long id) {
        reviewDAO.deleteReview(id);
    }
    // In ReviewService.java
//    public List<ReviewResponseDTO> filterReviewsByRatingAndDate(Integer rating, Date dateAdded) {
//        List<Review> reviews = reviewDAO.filterReviewsByRatingAndDate(rating, dateAdded);
//        return reviews.stream()
//                .map(review -> modelMapper.map(review, ReviewResponseDTO.class))
//                .collect(Collectors.toList());
//    }


    public List<ReviewResponseDTO> filterReviewsByCriteria(Integer rating, Date dateAdded, String title) {
        List<Review> reviews = reviewDAO.filterByCriteria(rating, dateAdded, title);
        // Convert List<Review> to List<ReviewResponseDTO>
        return reviews.stream()
                .map(review -> modelMapper.map(review, ReviewResponseDTO.class))
                .collect(Collectors.toList());
    }



}
