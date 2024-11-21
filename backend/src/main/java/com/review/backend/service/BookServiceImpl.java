package com.review.backend.service;

import com.review.backend.dao.BookDAO;
import com.review.backend.dto.BookResponseDTO;
import com.review.backend.model.Book;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Transactional
@Service
public class BookServiceImpl implements BookService{
    private final BookDAO bookDAO;

    public BookServiceImpl(BookDAO bookDAO) {
        this.bookDAO = bookDAO;
    }

    @Autowired
    private ModelMapper modelMapper;

    public List<BookResponseDTO> getAllBookTitles() {
        List<Book> books = bookDAO.getAllBookTitles();
        return books.stream()
                .map(book -> modelMapper.map(book, BookResponseDTO.class))
                .collect(Collectors.toList());
    }
}
