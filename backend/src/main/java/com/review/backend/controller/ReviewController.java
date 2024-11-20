package com.review.backend.controller;


import com.review.backend.constants.RestURI;
import com.review.backend.dto.ReviewDTO;
import com.review.backend.dto.ReviewRequestDTO;
import com.review.backend.dto.ReviewResponseDTO;
import com.review.backend.service.ReviewService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
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
//        System.out.println("addReview INPUT " + new Gson().toJson(reviewDTO));
        reviewService.addReview(reviewDTO);
        return ResponseEntity.ok("Review added successfully!");

    }

    // Get All Reviews
    @GetMapping(RestURI.GET_ALL_REVIEW)
    public ResponseEntity<List<ReviewResponseDTO>> getAllReviews() {
        return ResponseEntity.ok(reviewService.getAllReviews());
    }

    // Get Review by ID
    @GetMapping(RestURI.GET_REVIEW_BY_ID)
    public ResponseEntity<ReviewResponseDTO> getReviewById(@PathVariable Long id) {
        return ResponseEntity.ok(reviewService.getReviewById(id));
    }

    // Update Review
    @PutMapping(RestURI.UPDATE_REVIEW)
    public ResponseEntity<String> updateReview(@PathVariable Long id, @RequestBody ReviewRequestDTO reviewRequestDTO) {
        reviewService.updateReview(id, reviewRequestDTO);
        return ResponseEntity.ok("Review updated successfully!");
    }

    // Delete Review
    @DeleteMapping(RestURI.DELETE_REVIEW)
    public ResponseEntity<String> deleteReview(@PathVariable Long id) {
        reviewService.deleteReview(id);
        return ResponseEntity.ok("Review deleted successfully!");
    }

//    @GetMapping(RestURI.FILTER_BYDATE_RATING)
//    public ResponseEntity<List<ReviewResponseDTO>> filterReviewsByRatingAndDate(
//            @RequestParam(required = false) Integer rating,
//            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date dateAdded) {
//
//        return ResponseEntity.ok(reviewService.filterReviewsByRatingAndDate(rating, dateAdded));
//    }


}
