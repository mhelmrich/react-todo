import React from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import InputLine from './InputLine';

const dbUrl = "http://localhost:3000/db";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }
  componentDidMount() {
    axios.get(dbUrl + '/all')
    .then((response) => {
      this.setState({todos: response.data})
    })
    .catch((error) => {
      console.log(error);
    })
  }
  addTodo(task) {
    axios.post(dbUrl + '/add', {task: task})
    .then((response) => {
      this.setState({todos: this.state.todos.concat(response.data)});
    })
    .catch((error) => {
      console.log(error);
    });
  }
  removeTodo(index) {
    axios.post(dbUrl + '/remove', {id: this.state.todos[index]._id})
    .then((response) => {
      this.setState({todos: [...this.state.todos.slice(0, index),
                             ...this.state.todos.slice(index+1)]});
    })
    .catch((error) => {
      console.log(error);
    });
  }
  toggleTodo(index) {
    axios.post(dbUrl + '/toggle', {id: this.state.todos[index]._id,
                                  to: !this.state.todos[index].completed})
    .then((response) => {
      let newTodos = [...this.state.todos];
      newTodos[index] = response.data;
      this.setState({todos: newTodos});
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    return (
      <div id="todo-box">
        <InputLine submit={(task) => this.addTodo(task)}/>
        <TodoList todos={this.state.todos}
          todoXClick={(index) => (this.removeTodo(index))}
          todoToggle={(index) => (this.toggleTodo(index))}/>
      </div>
    )
  }
}

export default TodoApp;
