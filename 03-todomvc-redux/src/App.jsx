import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import Filter from "./components/Filter";
import "./App.css";

const App = () => (
  <div className="app">
    <Form />
    <Filter />
    <List />
  </div>
);

export default App;
