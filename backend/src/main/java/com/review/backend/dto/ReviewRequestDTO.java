package com.review.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewRequestDTO {

    private Long id;
    private Long user_id;
    private Long book_id;
    private String title;
    private String author;
    private int rating;
    private String review_text;
    private Date date_added;
}
