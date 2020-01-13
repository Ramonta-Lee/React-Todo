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
      todoList: todos
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
     return element.completed === false
    })
    this.setState({
      todoList: nonCompletedTodos
    })
    
  };

 

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="todo-app">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
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
