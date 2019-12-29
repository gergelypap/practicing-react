import { createContext } from "react";
import { FILTER } from "../constants";

export const initialState = {
  todos: [
    {
      id: "asdf",
      text: "Finish this",
      done: false
    }
  ],
  input: "",
  error: null,
  filter: FILTER.SHOW_ALL
};

export default createContext(initialState);
