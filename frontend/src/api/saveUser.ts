import axios from "axios";

export default class UserAPI {
  static saveUser = async (name: string, email: string, age: number) => {
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

  static getUserById = async (userId: string) => {
    try {
      const response = await axios.get(`http://localhost:3000/users/${userId}`);
      if (!response.data) {
        throw new Error("User not found");
      }
      return response.data;
    } catch (error) {
      console.error("Error fetching user by ID", error);
      throw error;
    }
  };

  static getUserByName = async (name: string) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/users/name/${name}`
      );
      if (!response.data) {
        throw new Error("User not found");
      }
      return response.data;
    } catch (error) {
      console.error("Error fetching user by Name", error);
      throw error;
    }
  };
}
