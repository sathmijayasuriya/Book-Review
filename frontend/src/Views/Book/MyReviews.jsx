import React, { useState } from "react";
import {
  Box,
  Grid2,
  Typography,
  TextField,
  InputAdornment,
  Rating,
} from "@mui/material";
import { BookCard } from "./components/BookCard";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

const MyReviews = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const books = [
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      rating: 4,
      date: "4 Feb 2022",
      reviewer: "John Doe",
    },
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      rating: 4,
      date: "4 Feb 2022",
      reviewer: "John Doe",
    },
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      rating: 4,
      date: "4 Feb 2022",
      reviewer: "John Doe",
    },
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      rating: 4,
      date: "4 Feb 2022",
      reviewer: "John Doe",
    },
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      rating: 4,
      date: "4 Feb 2022",
      reviewer: "John Doe",
    },
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      rating: 4,
      date: "4 Feb 2022",
      reviewer: "John Doe",
    },
  ];
  return (
    <>
      <Box>
        <Box paddingX={4} paddingTop={2}>
          <Typography variant="h4" fontWeight="bold">
            My Reviews
          </Typography>
        </Box>
        {/* Book Cards Section */}
        <Box sx={{ p: 3 }}>
          <Grid2 container spacing={2}>
            {books.map((book, index) => (
              <Grid2 size={3} key={index}>
                <BookCard {...book} isUpdate={true} />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>
    </>
  );
};

export default MyReviews;
