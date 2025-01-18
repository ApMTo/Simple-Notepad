import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    currentCategory: {},
    categoriesData: [],
  },
  reducers: {
    addCategories(state, { payload }) {
      state.categoriesData = [...state.categoriesData, payload];
    },
    setCurrentCategory(state, { payload }) {
      state.currentCategory = payload;
    },
    addText(state, { payload }) {
      state.currentCategory.posts.push(payload);
    },
    deletePost(state, { payload }) {
      state.currentCategory.posts = state.currentCategory.posts.filter(
        (el) => el.id !== payload
      );
    },
  },
});

export const selectCategories = (state) => state.categories;
export const { addCategories, setCurrentCategory, addText, deletePost } =
  categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
