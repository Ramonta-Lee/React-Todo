import React, { Component } from 'react';

class TodoForm extends Component {
 constructor() {
  super();
  this.state = {
   todoText: ""
  };
 }

 handleChanges = e => {
  this.setState({
   todoText: e.target.value
  });
 };

 handleSubmit = e => {
  e.preventDefault();
  this.props.addTodo(this.state.todoText);
  this.setState({todoText: ""})
 };

 render() {
  return(
   <form onSubmit={this.handleSubmit}>
    <input type="text" name="todo" value={this.state.todoText} onChange={this.handleChanges} />
    <button>Add Todo</button>
    <button onClick={this.props.saveList}>Save List</button>
   </form>
  );
 }
}

export default TodoForm;