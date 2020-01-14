import React, { Component } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./Todo.css";

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends Component {
  // you will need a place to store your state in this component.
  constructor() {
    //constructor with state
    super();
    //initialize the state object
    this.state = {
      todoList: localStorage.getItem("todoList")
        ? JSON.parse(localStorage.getItem("todoList"))
        : todos,
      todoText: ""
    };
  }

  toggleCompleted = id => {
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    //update todoList
    this.setState({
      todoList: newTodoList
    });
  };

  addTodo = todoTask => {
    const newTodo = {
      task: todoTask,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };

  deleteTodo = () => {
    const nonCompletedTodos = this.state.todoList.filter(element => {
      return element.completed === false;
    });
    this.setState({
      todoList: nonCompletedTodos
    });
  };

  saveList() {
    localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
  }

  handleChanges = e => {
    this.setState({
      todoText: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addTodo(this.state.todoText);
  };

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="todo-app">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          addTodo={this.addTodo}
          saveList={this.saveList}
          handleChanges={this.handleChanges}
          handleSubmit={this.handleSubmit}
        />
        <TodoList
          todos={this.state.todoList}
          toggleCompleted={this.toggleCompleted}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
