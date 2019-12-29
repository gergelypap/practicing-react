import React, { useReducer } from "react";
import Context, { initialState } from "./context";
import reducer from "../reducers";

export default function({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}
