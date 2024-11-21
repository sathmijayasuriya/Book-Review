import axios from "axios";
import { Configuration } from "../Configuration";

export const getAllReviews = async () => {
  try {
    const response = await axios.get(
      `${Configuration.BASE_URL}reviews/getAllReviewss`
    );
    return response.data; // Assuming the API returns the list of reviews
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error; // Re-throw the error for handling in the calling component
  }
};

export const reviewById = async (id) => {
  try {
    const response = await axios.get(`${Configuration.BASE_URL}reviews/reviewByuserid/${id}`);
    return response.data; // Returning the review data
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error; // Re-throwing the error so it can be handled by the calling component
  }
};

export const deleteReview = async (id) => {
  try {
    const response = await axios.delete(`${Configuration.BASE_URL}reviews/deleteReview/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting review:", error.response?.data || error.message);
    throw error;
  }
};

