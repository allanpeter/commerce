import axios from "axios";

const sendEmail = async (name: string, email: string, age: number) => {
  try {
    const response = await axios.post(`http://localhost:3000/users`, {
      name,
      email,
      age,
    });
    if (!response.data) {
      throw new Error("Error to save user");
    }
    return response.data;
  } catch (error) {
    console.error("Error to save user", error);
  }
};
export default saveUser;
