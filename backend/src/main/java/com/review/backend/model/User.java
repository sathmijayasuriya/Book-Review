package com.review.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class User {
    private long id;
    private String fullName;
    private String email;
    private String phoneNumber;
    private String password;
//    private Date createdAt;
}

