package com.review.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDate;


@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Review {
    private Long id;
    private Long user_id;
    private Long book_id;
    private String title;
    private String author;
    private int rating;
    private String review_text;
    private Date date_added;
}
