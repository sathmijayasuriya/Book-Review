import React, { useState, useEffect } from "react"; 
import { useSelector } from "react-redux";
import { Box, Grid2, Typography } from "@mui/material";
import { BookCard } from "./components/BookCard";
import { reviewById } from "../../services/BookService";

const MyReviews = () => {
  const [books, setBooks] = useState([]);
  const { user } = useSelector((state) => state.auth);

  // Fetch reviews when the component mounts or user changes
  useEffect(() => {
    const fetchReviews = async () => {
      if (!user) return; // Avoid fetching if there's no user
      try {
        const reviews = await reviewById(user.id); // Fetch reviews by user ID
        setBooks(reviews); // Set reviews to the books state
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviews();
  }, [user]); // Re-run effect if user changes

  // Update the review in the local state
  const handleReviewUpdate = (updatedReview) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === updatedReview.id ? { ...book, ...updatedReview } : book
      )
    );
  };

  // Delete the review from the state
  const handleReviewDelete = (deletedReviewId) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== deletedReviewId));
  };

  return (
    <Box>
      <Box paddingX={4} paddingTop={2}>
        <Typography variant="h4" fontWeight="bold">
          My Reviews
        </Typography>
      </Box>

      {/* Book Cards Section */}
      <Box sx={{ p: 3 }}>
        <Grid2 container spacing={2}>
          {books.map((book) => (
            <Grid2 size={3} key={book.id}>
              <BookCard
                {...book} 
                isUpdate={true} 
                onUpdate={handleReviewUpdate}  // Pass the onUpdate handler to BookCard
                onDelete={handleReviewDelete}  // Pass the onDelete handler here
              />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
};

export default MyReviews;
