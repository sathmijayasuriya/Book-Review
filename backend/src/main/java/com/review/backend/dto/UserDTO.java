package com.review.backend.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class UserDTO {

    private String fullName;
    private String email;
    private String phoneNumber;
    private String password;
    private String confirmPassword; // Ensuring the password is confirmed on the frontend
}

