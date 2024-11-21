import axios from "axios";
import { Configuration } from "../Configuration";

export const signIn = async (payload) => {
  try {
    const response = await axios.post(
      `${Configuration.BASE_URL}auth/login`,
      payload
    );
    console.log("~ signIn ~ response:", response)
    
  //  let userDetails = {
  //    email: response.data.email,
  //    id: response.data.id,
  //    fullName: response.data.fullName,
  //    phoneNumber: response.data.phoneNumber,
  //  };
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const signUp = async (payload) => {
  try {
    const response = await axios.post(
      `${Configuration.BASE_URL}auth/signup`,
      payload
    );
    console.log("~ signIn ~ response:", response);

    //  let userDetails = {
    //    email: response.data.email,
    //    id: response.data.id,
    //    fullName: response.data.fullName,
    //    phoneNumber: response.data.phoneNumber,
    //  };
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const LogOut = async () => {
  try {
    console.log("logged out");
    return { isSuccess: true };
  } catch (error) {
    console.log(error);
    return { isSuccess: false, error };
  }
};
