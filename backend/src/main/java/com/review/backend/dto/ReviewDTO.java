package com.review.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class ReviewDTO {

    private Long userId;
    private Long bookId;
    private String title;
    private String author;
    private int rating;
    private String reviewText;
}
