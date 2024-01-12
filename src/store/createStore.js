import { configureStore } from "@reduxjs/toolkit";
import todosReducre from "./todos"

export const store = configureStore({
  reducer: {
    todos: todosReducre
  }
})
