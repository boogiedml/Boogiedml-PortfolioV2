import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./features/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(shazamApi.middleware),
});