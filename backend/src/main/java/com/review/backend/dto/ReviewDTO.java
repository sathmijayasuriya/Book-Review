package com.review.backend.dto;

import lombok.*;

import java.sql.Date;


@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class ReviewDTO {

    private Long id;
    private Long user_id;
    private Long book_id;
    private String title;
    private String author;
    private int rating;
    private String review_text;
    private Date date_added;

}
