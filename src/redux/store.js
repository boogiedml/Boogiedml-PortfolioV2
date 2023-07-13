import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./features/themeSlice";
import appSettingReducer from "./features/appSettingSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    appSetting: appSettingReducer,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(shazamApi.middleware),
});