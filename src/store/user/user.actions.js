import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserById = (userId = 1) =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ id: userId, name: "John" }), 1000)
  );

export const getUserById = createAsyncThunk(
  "users/by-id",
  async (userId, thunkApi) => {
    try {
      const response = await fetchUserById(userId);
      return response;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
