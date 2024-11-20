package com.review.backend.controller;


import com.review.backend.constants.RestURI;
import com.review.backend.dto.ReviewDTO;
import com.review.backend.model.Review;
import com.review.backend.service.ReviewService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(RestURI.BASE_URL)
public class ReviewController {

    private static final Logger logger = LoggerFactory.getLogger(ReviewController.class);

    @Autowired
    private ReviewService reviewService;

    // Add Review
    @PostMapping(RestURI.ADD_REVIEW)
    public ResponseEntity<String> addReview(@RequestBody ReviewDTO reviewDTO) {
        Review review = new Review();
        review.setUserId(reviewDTO.getUserId());
        review.setBookId(reviewDTO.getBookId());
        review.setTitle(reviewDTO.getTitle());
        review.setAuthor(reviewDTO.getAuthor());
        review.setRating(reviewDTO.getRating());
        review.setReviewText(reviewDTO.getReviewText());

        // Call service to add review
        reviewService.addReview(review);
        return ResponseEntity.ok("Review added successfully!");
    }

    // Get All Reviews
    @GetMapping(RestURI.GET_ALL_REVIEW)
    public ResponseEntity<List<Review>> getAllReviews() {
        return ResponseEntity.ok(reviewService.getAllReviews());
    }

    // Get Review by ID
    @GetMapping(RestURI.GET_REVIEW_BY_ID)
    public ResponseEntity<Review> getReviewById(@PathVariable Long id) {
        return ResponseEntity.ok(reviewService.getReviewById(id));
    }

    // Update Review
    @PutMapping(RestURI.UPDATE_REVIEW)
    public ResponseEntity<String> updateReview(@PathVariable Long id, @RequestBody ReviewDTO reviewDTO) {
        Review review = new Review();
        review.setUserId(reviewDTO.getUserId());
        review.setBookId(reviewDTO.getBookId());
        review.setTitle(reviewDTO.getTitle());
        review.setAuthor(reviewDTO.getAuthor());
        review.setRating(reviewDTO.getRating());
        review.setReviewText(reviewDTO.getReviewText());

        // Call service to update review
        reviewService.updateReview(id, review);
        return ResponseEntity.ok("Review updated successfully!");
    }

    // Delete Review
    @DeleteMapping(RestURI.DELETE_REVIEW)
    public ResponseEntity<String> deleteReview(@PathVariable Long id) {
        reviewService.deleteReview(id);
        return ResponseEntity.ok("Review deleted successfully!");
    }
}
