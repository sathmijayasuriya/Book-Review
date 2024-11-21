import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Rating } from "@mui/material";
import axios from "axios";
import { Configuration } from "../../../Configuration"; // Adjust the path accordingly
import { useSelector } from "react-redux";

export default function ReviewUpdate({ existingReview, onUpdate }) {
  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState(existingReview?.rating || 0); // Set initial rating
  const [formValues, setFormValues] = React.useState({
    bookTitle: existingReview?.title || "",   // Pre-fill title
    bookAuthor: existingReview?.author || "", // Pre-fill author
    reviewText: existingReview?.review_text || "",  // Pre-fill review_text
  });

  const { user } = useSelector((state) => state.auth);

  const handleClickOpen = () => {
    setOpen(true); // Open the dialog
  };

  const handleClose = () => {
    setOpen(false); // Close the dialog
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value }); // Update form field values
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if existingReview or its ID is undefined
    if (!existingReview || !existingReview.id) {
      alert("Review ID is missing!");
      return;
    }

    // Validate that all fields are filled before submitting
    if (!formValues.bookTitle || !formValues.bookAuthor || !formValues.reviewText) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const updatedReview = {
      user_id: existingReview?.user_id,  // Ensure user_id is passed
      book_id: existingReview?.book_id,  // Ensure book_id is passed
      title: formValues.bookTitle,     // Updated title
      author: formValues.bookAuthor,   // Updated author
      rating: rating,                  // Updated rating
      review_text: formValues.reviewText,  // Updated review text
      date_added: existingReview?.date_added ? new Date(existingReview.date_added).toISOString().split('T')[0] : new Date().toISOString().split('T')[0], // Format to yyyy-MM-dd
    };

    try {
      const response = await axios.put(
        `${Configuration.BASE_URL}reviews/updateReview/${existingReview?.id}`, // Use existingReview.id here
        updatedReview
      );
      console.log("Review updated successfully:", response.data);
      onUpdate(updatedReview);  // Trigger the onUpdate callback to update the parent component state
      handleClose();  // Close the dialog after update
    } catch (error) {
      console.error("Error updating review:", error.response?.data || error.message);
    }
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Update Review
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,  // Attach the form submission handler
        }}
      >
        <DialogTitle>Update Review</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="bookTitle"
            name="bookTitle"
            label="Book Title"
            type="text"
            fullWidth
            value={formValues.bookTitle} // Set initial value
            onChange={handleChange}
          />
          <TextField
            required
            margin="dense"
            id="bookAuthor"
            name="bookAuthor"
            label="Book Author"
            type="text"
            fullWidth
            value={formValues.bookAuthor} // Set initial value
            onChange={handleChange}
          />
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Rating
              name="rating"
              value={rating}
              onChange={(event, newValue) => setRating(newValue)} // Update rating on change
            />
          </Box>
          <TextField
            required
            margin="dense"
            id="reviewText"
            name="reviewText"
            label="Review"
            type="text"
            multiline
            rows={4}
            fullWidth
            value={formValues.reviewText} // Set initial value
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Update</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
