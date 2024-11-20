package com.review.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;


@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Review {
    private Long id;
    private Long userId;
    private Long bookId;
    private String title;
    private String author;
    private int rating;
    private String reviewText;
    private Timestamp dateAdded;
}
