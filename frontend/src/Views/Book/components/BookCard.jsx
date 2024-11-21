import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Rating,
  Stack,
  Button,
} from "@mui/material";
import ReviewUpdate from "./ReviewUpdate";

 export const BookCard = ({
   title,
   author,
   review_text,
   rating,
   date_added,
  //  reviewer,
   isUpdate,
 }) => {
    const handleUpdate = (updatedReview) => {
      console.log("Final Updated Review:", updatedReview);
    };
   return (
     <Card elevation={3} sx={{ borderRadius: 2, width: 420, height: 220  }}>
       <CardContent>
         <Box
           sx={{
             display: "flex",
             justifyContent: "space-between",
             alignItems: "center",
             mb: 1,
           }}
         >
           <Typography variant="h6" fontWeight="bold">
             {title}
           </Typography>
           <Typography variant="subtitle2" color="text.secondary">
             {author}
           </Typography>
         </Box>
         <Rating name="read-only" value={rating} readOnly size="small" />
         <Typography variant="body2" color="text.secondary" mt={1}>
           {review_text}
         </Typography>
         <Box mt={2}>
           <Typography variant="caption" color="info">
             {date_added} • {date_added}
           </Typography>
         </Box>
         {isUpdate && (
           <Stack direction={"row"} spacing={2}>
             <ReviewUpdate
               existingReview={{
                 title,
                 author,
                 review_text,
                 rating,
                 date_added,
               }}
               onUpdate={handleUpdate}
             />
             <Button color="error">Delete</Button>
           </Stack>
         )}
       </CardContent>
     </Card>
   );
 }
