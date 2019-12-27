import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import Filter from "./components/Filter";
import "./App.css";
import { FILTER } from "./actions";

export default class App extends React.Component {
  state = {
    todos: [],
    filter: FILTER.SHOW_ALL
  };

  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.getFilteredTodos = this.getFilteredTodos.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  addTodo(title) {
    const nextId = this.state.todos.length + 1;
    this.setState({
      todos: this.state.todos.concat({
        id: nextId,
        title,
        done: false
      })
    });
  }

  toggleTodo(todo) {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === todo.id) {
          item.done = !item.done;
        }
        return item;
      })
    });
  }

  getFilteredTodos(filter) {
    const { todos } = this.state;
    switch (filter) {
      case FILTER.SHOW_COMPLETED:
        return todos.filter(item => item.done);
      case FILTER.SHOW_PENDING:
        return todos.filter(item => !item.done);
      case FILTER.SHOW_ALL:
      default:
        return todos;
    }
  }

  setFilter(filter) {
    this.setState({
      filter
    });
  }

  render() {
    return (
      <div className="app">
        <Form todos={this.state.todos} onSubmit={this.addTodo} />
        <Filter active={this.state.filter} onChange={this.setFilter} />
        <List
          items={this.getFilteredTodos(this.state.filter)}
          onTodoClick={this.toggleTodo}
        />
      </div>
    );
  }
}
