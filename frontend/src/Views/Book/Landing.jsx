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
import { DatePicker } from "@mui/x-date-pickers";

const Landing = () => {
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
        <Box
          sx={{
            height: 300,
            backgroundImage: `url('https://s3-alpha-sig.figma.com/img/90be/a963/0850ea845801bc353ae9ed3d852184d8?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qTpxYhyjuNiv0l9Gc41HDHfOXHR7kTeeg5yQl5Mbc6dSnvV5vmjQdzgkH0wCu7~U87wjhZG~QZji~CC3bICuEnPDK75pbaF8ZdLKpKpapzOaxHdE1Ccw8rbnM2lhLdq9JdBqHgSunZhJAsWZTb4uWv3smW3CJnOXz~M1huIIiwBXm1JNhPCvraFl2Bxh-JPEAizvk8E6c3UUBHQOCbMyIbr-63ZCCJbdsnl0Bw1QsOO0MMU7mOqU2x4VS5fHEBA3J-8JvvCqAkUEfq4jFRiupufdUhrtfT6oUlCdBzYmJ0UO1lBPl64~~NKJDeKOIrtw7bxfR~bSmRacEjitAxC~hw__')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <Typography variant="h3" fontWeight="bold">
          Connect Through Book Reviews
          </Typography>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              width: "60%",
              bgcolor: "#fff",
              borderRadius: 2,
            }}
          >
            {/* Search Input */}
            <TextField
              fullWidth
              placeholder="What do you want to read next?"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {/* <SearchIcon /> */}
                  </InputAdornment>
                ),
              }}
              sx={{ flex: 1 }}
            />

            {/* Rating Filter */}
            <Rating
              value={selectedRating}
              onChange={(event, newValue) => setSelectedRating(newValue)}
              size="small"
              sx={{ mx: 2 }}
            />

            {/* Date Filter */}
            <DatePicker
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              renderInput={(params) => (
                <TextField {...params} size="small" />
              )}
            />
          </Box>
        </Box>

        {/* Book Cards Section */}
        <Box sx={{ p: 3 }}>
          <Grid2 container spacing={2}>
            {books.map((book, index) => (
              <Grid2 size={3} key={index}>
                <BookCard {...book} />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>
    </>
  );
};

export default Landing;
