


export const signIn = async (payload) => {
  try {
    
   let userDetails = {
     email: "test@gmail.com",
     displayName: "test user",
     phoneNumber: "0775632342",
   };
    return userDetails;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const signUp = async (payload) => {
  try {
    let userDetails = {
      email: payload.email,
      displayName: payload.fullName,
      phoneNumber: payload.phoneNumber,
    };
    return userDetails;
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
