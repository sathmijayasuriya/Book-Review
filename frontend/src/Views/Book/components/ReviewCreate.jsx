import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  Rating,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import axios from "axios";
import { Configuration } from "../../../Configuration";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ReviewCreate() {
  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState(0);
  const [bookTitle, setBookTitle] = React.useState("");
  const [bookAuthor, setBookAuthor] = React.useState("");
  const [reviewText, setReviewText] = React.useState("");
  const [bookList, setBookList] = React.useState([]);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // Fetch all book titles from the API when the component mounts
  React.useEffect(() => {
    const fetchBookTitles = async () => {
      try {
        const response = await axios.get(
          `${Configuration.BASE_URL}reviews/getBookNames`
        );
        setBookList(response.data); // Assuming response.data is an array of books
      } catch (error) {
        console.error("Error fetching book titles:", error);
      }
    };

    fetchBookTitles();
  }, []);
  const handleClickOpen = () => {
    if (!user) {
      navigate("/auth/sign-in");
      return;
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setBookTitle("");
    setReviewText("");
    setBookAuthor("");
    setRating(0);
  };

  // Function to handle review submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!bookTitle || !bookAuthor || rating === 0 || !reviewText) {
      console.error("All fields are required.");
      return; // Ensure all fields are filled
    }

    const reviewData = {
      user_id: user.id,
      book_id: bookList.find((book) => book.title === bookTitle)?.id, // Map selected book title to its ID
      title: bookTitle,
      author: bookAuthor,
      rating: rating,
      review_text: reviewText,
      date_added: new Date(),
    };

    console.log("Review Data to Submit:", reviewData);

    try {
      const response = await axios.post(
        `${Configuration.BASE_URL}reviews/addReview`,
        reviewData
      );
      console.log("Review added successfully:", response.data);
      setOpen(false); // Close dialog after submission
    } catch (error) {
      console.error("Error adding review:", error.response?.data || error.message);
    }
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Review
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        // PaperProps={{
        //   // component: "form",
        //   // onSubmit: (event) => {
        //   //   event.preventDefault();
        //   //   const formData = new FormData(event.currentTarget);
        //   //   const formJson = Object.fromEntries(formData.entries());
        //   //   const email = formJson.email;
        //   //   console.log(email);
        //   //   handleClose();
        //   },
        // }
     // }
     PaperProps={{
      component: "form",
      onSubmit: handleSubmit, // Attach your existing handleSubmit function here
    }}
  

      >
        <DialogTitle>Add a Review</DialogTitle>
        <DialogContent>
          {/* Dropdown for Book Title */}
          <FormControl fullWidth margin="dense">
            <InputLabel>Book Title</InputLabel>
            <Select
              value={bookTitle}
              onChange={(e) => setBookTitle(e.target.value)}
              label="Book Title"
              required
            >
              {bookList.map((book) => (
                <MenuItem key={book.id} value={book.title}>
                  {book.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* <TextField
            autoFocus
            required
            margin="dense"
            id="bookTitle"
            name="bookTitle"
            label="Book Title"
            type="text"
            fullWidth
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
          /> */}
          <TextField
            autoFocus
            required
            margin="dense"
            id="bookAuthor"
            name="bookAuthor"
            label="Book Author"
            type="text"
            fullWidth
            value={bookAuthor}
            onChange={(e) => setBookAuthor(e.target.value)}
          />{" "}
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Rating
              name="rating"
              value={rating}
              required
              onChange={(event, newValue) => setRating(Number(newValue))} // Convert to a number
              />
            <Box sx={{ ml: 2 }}>
              {rating > 0 ? `${rating} Stars` : "No Rating"}
            </Box>
          </Box>
          <TextField
            autoFocus
            required
            multiline
            rows={4}
            margin="dense"
            id="reviewText"
            name="reviewText"
            label="Review Text"
            type="text"
            fullWidth
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" type="submit">
            Add Review
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
