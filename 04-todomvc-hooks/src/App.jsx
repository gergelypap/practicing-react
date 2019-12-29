import React from "react";
import "./App.css";
import Store from "./store/";
import Filters from "./components/Filters";
import ListContainer from "./containers/ListContainer";
import FormContainer from "./containers/FormContainer";

export default function() {
  return (
    <div className="app">
      <Store>
        <FormContainer />
        <Filters />
        <ListContainer />
      </Store>
    </div>
  );
}
