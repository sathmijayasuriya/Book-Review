package com.review.backend.service;

import com.review.backend.dto.BookResponseDTO;

import java.util.List;

public interface BookService {
    List<BookResponseDTO> getAllBookTitles();

}
