package com.review.backend.service;

import com.review.backend.dto.ReviewDTO;
import com.review.backend.dto.ReviewRequestDTO;
import com.review.backend.dto.ReviewResponseDTO;

import java.util.*;


public interface ReviewService {

    void addReview(ReviewDTO reviewDTO);
    List<ReviewResponseDTO> getAllReviews();
//    ReviewResponseDTO getReviewById(Long id) ;
    void updateReview(Long id, ReviewRequestDTO reviewRequestDTO) ;
    void deleteReview(Long id) ;
//    List<ReviewResponseDTO> filterReviewsByRatingAndDate(Integer rating, Date dateAdded) ;
     List<ReviewResponseDTO> filterReviewsByCriteria(Integer rating, Date dateAdded, String title) ;
     List<ReviewResponseDTO> getReviewsByUser(Long id) ;

    }
