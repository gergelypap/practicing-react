import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";
import Store from "./store/index"; // TODO: Why does this need index?
import Filters from "./components/Filters";

export default function() {
  return (
    <div className="app">
      <Store>
        <Form />
        <Filters />
        <List />
      </Store>
    </div>
  );
}
