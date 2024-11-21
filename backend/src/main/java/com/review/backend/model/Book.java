package com.review.backend.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.sql.Date;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Book {

    private Long id;
    private String title;
    private String author;
    private Date created_at;
}
