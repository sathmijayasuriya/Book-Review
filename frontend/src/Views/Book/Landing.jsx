import React, { useState ,useEffect} from "react";
import axios from "axios";
import { getAllReviews } from "../../Configuration";
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
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';

const Landing = () => {
    const [selectedRating, setSelectedRating] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [filteredBooks, setFilteredBooks] = useState([]);

  //   const books = [
  //   {
  //     title: "Harry Potter",
  //     author: "J.K. Rowling",
  //     review_text:
  //       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  //     rating: 4,
  //     date_added: "4 Feb 2022",
  //     reviewer: "John Doe",
  //   },
  //   {
  //     title: "Harry Potter",
  //     author: "J.K. Rowling",
  //     review_text:
  //       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  //     rating: 4,
  //     date_added: "4 Feb 2022",
  //     reviewer: "John Doe",
  //   },
  //   {
  //     title: "Harry Potter",
  //     author: "J.K. Rowling",
  //     review_text:
  //       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  //     rating: 4,
  //     date_added: "4 Feb 2022",
  //     reviewer: "John Doe",
  //   },
  //   {
  //     title: "Harry Potter",
  //     author: "J.K. Rowling",
  //     review_text:
  //       "Enjoyed the storyline, but the pacing was slow.  Emotionally intense and unforgettable.",
  //     rating: 4,
  //     date_added: "4 Feb 2022",
  //     reviewer: "John Doe",
  //   },
  //   {
  //     title: "Harry Potter",
  //     author: "J.K. Rowling",
  //     review_text:
  //       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  //     rating: 4,
  //     date_added: "4 Feb 2022",
  //     reviewer: "John Doe",
  //   },
  //   {
  //     title: "Harry Potter",
  //     author: "J.K. Rowling",
  //     review_text:
  //       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  //     rating: 4,
  //     date_added: "4 Feb 2022",
  //     reviewer: "John Doe",
  //   },
  // ];
  const [books, setBooks] = useState([]);
  useEffect(() => {
    // Fetch all reviews
    const fetchReviews = async () => {
        try {
            const reviews = await getAllReviews();
            setBooks(reviews); // Update state with fetched reviews
        } catch (error) {
            console.error("Failed to fetch reviews:", error);
        }
    };

    fetchReviews();
}, []);

useEffect(() => {
  fetchFilteredReviews();
}, [selectedRating, selectedDate, searchText]);

  // Function to fetch filtered reviews
  const fetchFilteredReviews = async () => {
    try {
        // Build query parameters
        const params = new URLSearchParams();
        if (selectedRating) params.append("rating", selectedRating);
        if (selectedDate) params.append("dateAdded", selectedDate.toISOString().slice(0, 10)); // Ensures format is yyyy-MM-dd
        if (searchText) params.append("title", searchText);

        // Call the backend API
        const response = await axios.get(
            `http://localhost:9998/reviews/filterReviewsByRatingAndDate`,
            { params }
        );

        setBooks(response.data); // Update books with the filtered results
    } catch (error) {
        console.error("Failed to fetch filtered reviews:", error);
    }
};

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
            position: "relative", // Ensure it's positioned correctly within its parent
            width: "100vw", // Use viewport width to ensure it spans the entire width of the screen
        
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
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {/* Search Icon can go here */}
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
        <Box sx={{ p: 4 }}>
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
