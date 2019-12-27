import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import Filter from "./components/Filter";
import "./App.css";
import { FILTER } from "./actions";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.getFilteredTodos = this.getFilteredTodos.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  addTodo(title) {
    const nextId = this.props.todos.length + 1;
    this.setState({
      todos: this.props.todos.concat({
        id: nextId,
        title,
        done: false
      })
    });
  }

  toggleTodo(todo) {
    this.setState({
      todos: this.props.todos.map(item => {
        if (item.id === todo.id) {
          item.done = !item.done;
        }
        return item;
      })
    });
  }

  getFilteredTodos(filter) {
    const { todos } = this.props;
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
        <Form todos={this.props.todos} onSubmit={this.addTodo} />
        <Filter active={this.props.filter} onChange={this.setFilter} />
        <List
          items={this.getFilteredTodos(this.props.filter)}
          onTodoClick={this.toggleTodo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filter: state.filterReducer,
  todos: state.todoReducer
});

export default connect(mapStateToProps)(App);
