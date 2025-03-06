import axios from "axios";

const handleLogin = async (user) => {
  const userData = {
    userId: user.uid, 
    email: user.email,
    displayName: user.displayName
  };

  try {
    await axios.post("http://localhost:5173/api/auth/login", userData);
    console.log("User stored successfully");
  } catch (error) {
    console.error("Error storing user:", error);
  }
};
