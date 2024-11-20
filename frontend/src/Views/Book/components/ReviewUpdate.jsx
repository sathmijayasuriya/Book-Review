import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Rating } from "@mui/material";

export default function ReviewUpdate({ existingReview, onUpdate }) {
  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState(existingReview?.rating || 0);
  const [formValues, setFormValues] = React.useState({
    bookTitle: existingReview?.bookTitle || "",
    bookAuthor: existingReview?.bookAuthor || "",
    reviewText: existingReview?.reviewText || "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
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
          onSubmit: (event) => {
            event.preventDefault();
            const updatedReview = { ...formValues, rating };
            console.log("Updated Review:", updatedReview);
            onUpdate(updatedReview); // Call the update callback
            handleClose();
          },
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
            value={formValues.bookTitle}
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
            value={formValues.bookAuthor}
            onChange={handleChange}
          />
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Rating
              name="rating"
              value={rating}
              onChange={(event, newValue) => setRating(newValue)}
            />
            <Box sx={{ ml: 2 }}>
              {rating > 0 ? `${rating} Stars` : "No Rating"}
            </Box>
          </Box>
          <TextField
            required
            multiline
            rows={4}
            margin="dense"
            id="reviewText"
            name="reviewText"
            label="Review Text"
            type="text"
            fullWidth
            value={formValues.reviewText}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" type="submit">
            Update Review
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
