import axios from "axios";
const Configuration = {

    BASE_URL : "http://localhost:9998/reviews",

    
    // APP_CODE:"1392",
    // SESSION_ID: "1696306438325"
}
export const getAllReviews = async () => {
    try {
        const response = await axios.get(`${Configuration.BASE_URL}/getAllReviewss`);
        return response.data; // Assuming the API returns the list of reviews
    } catch (error) {
        console.error("Error fetching reviews:", error);
        throw error; // Re-throw the error for handling in the calling component
    }
};
export default Configuration