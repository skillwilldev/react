import { createSlice } from "@reduxjs/toolkit";

const loadFromStorage = () => {
  try {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const initialState = {
  items: loadFromStorage(),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action) {
      const course = action.payload;
      const alreadyExists = state.items.some((item) => item.id === course.id);
      if (!alreadyExists) {
        state.items.push(course);
      }
    },
    removeFavorite(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    toggleFavorite(state, action) {
      const course = action.payload;
      const exists = state.items.some((item) => item.id === course.id);
      if (exists) {
        state.items = state.items.filter((item) => item.id !== course.id);
      } else {
        state.items.push(course);
      }
    },
  },
});

export const { addFavorite, removeFavorite, toggleFavorite } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
