import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import coursesReducer from "./coursesSlice";
import coursesCountReducer from "./coursesCountSlice";
import filterForCountReducer from "./filterForCountSlice";
import footerMenuReducer from "./footerMenuSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    courses: coursesReducer,
    coursesCount: coursesCountReducer,
    filterForCount: filterForCountReducer,
    footerMenu: footerMenuReducer,
  },
});
