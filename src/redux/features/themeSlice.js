import { createSlice } from "@reduxjs/toolkit";

const initialTheme = localStorage.getItem("theme") || "dark";

const initialState = {
  theme: initialTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    darkMode: (state) => {
      state.theme = "dark";
    },
    lightMode: (state) => {
      state.theme = "light";
    },
  },
});

export const { darkMode, lightMode } = themeSlice.actions;

export default themeSlice.reducer;