package com.review.backend.controller;


import com.review.backend.constants.RestURI;
import com.review.backend.dto.BookResponseDTO;
import com.review.backend.dto.ReviewResponseDTO;
import com.review.backend.service.BookService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(RestURI.BASE_URL)
public class BookController {

    private static final Logger logger = LoggerFactory.getLogger(BookController.class);

    @Autowired
    private BookService bookService;
    @GetMapping(RestURI.GET_BOOK_NAMES)
    public ResponseEntity<List<BookResponseDTO>> getAllBookTitles() {
        return ResponseEntity.ok(bookService.getAllBookTitles());
    }
}
