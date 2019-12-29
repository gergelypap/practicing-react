import React from "react";
import FormContainer from "./containers/FormContainer";
import Filters from "./components/Filters";
import ListContainer from "./containers/ListContainer";
import "./App.css";

const App = () => (
  <div className="app">
    <FormContainer />
    <Filters />
    <ListContainer />
  </div>
);

export default App;
