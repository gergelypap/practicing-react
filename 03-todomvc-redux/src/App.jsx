import React from "react";
import FormContainer from "./containers/FormContainer";
import Filter from "./components/Filter";
import ListContainer from "./containers/ListContainer";
import "./App.css";

const App = () => (
  <div className="app">
    <FormContainer />
    <Filter />
    <ListContainer />
  </div>
);

export default App;
