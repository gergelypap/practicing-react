import { createContext } from "react";
import { FILTER } from "../constants";

export const initialState = {
  todos: [],
  input: "",
  error: null,
  filter: FILTER.SHOW_ALL
};

export default createContext(initialState);
