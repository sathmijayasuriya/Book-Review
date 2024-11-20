import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Rating } from "@mui/material";

export default function ReviewCreate() {
  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Review
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Add a Review</DialogTitle>
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
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="bookAuthor"
            name="bookAuthor"
            label="Book Author"
            type="text"
            fullWidth
          />{" "}
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
