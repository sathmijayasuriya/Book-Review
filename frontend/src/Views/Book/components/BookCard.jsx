import React from "react";
import { Box, Typography, Card, CardContent, Rating, Stack, Button } from "@mui/material";
import ReviewUpdate from "./ReviewUpdate";
import { deleteReview } from "../../../services/BookService";
export const BookCard = ({
  id,         // Include id here
  title,
  author,
  review_text,
  rating,
  date_added,
  isUpdate,
  onUpdate,   // Pass the onUpdate handler
  onDelete,   // Pass the onDelete handler
}) => {
  const handleDelete = async () => {
    try {
      await deleteReview(id);  // Call the deleteReview function with the review id
      onDelete(id);  // Notify the parent component to update the state
    } catch (error) {
      console.error("Failed to delete review:", error);
    }
  };

  return (
    <Card elevation={3} sx={{ borderRadius: 2, width: 420, height: 220 }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
          <Typography variant="h6" fontWeight="bold">{title}</Typography>
          <Typography variant="subtitle2" color="text.secondary">{author}</Typography>
        </Box>
        <Rating name="read-only" value={rating} readOnly size="small" />
        <Typography variant="body2" color="text.secondary" mt={1}>{review_text}</Typography>
        <Box mt={2}><Typography variant="caption" color="info">{date_added}</Typography></Box>

        {isUpdate && (
          <Stack direction={"row"} spacing={2}>
            <ReviewUpdate
              existingReview={{
                id,
                title,
                author,
                review_text,
                rating,
                date_added,
              }}
              onUpdate={onUpdate}  // Pass the onUpdate handler here
            />
            <Button color="error" onClick={handleDelete}>Delete</Button>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};
