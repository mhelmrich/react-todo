import React from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import InputLine from './InputLine';

const dbUrl = "http://localhost:3000/db";

let dummyData = [{task: "Learn about React", completed: true},
                 {task: "Finish todo project", completed: false},
                 {task: "Horizons speaker series", completed: false}];

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }
  componentDidMount() {
    this.setState({todos: dummyData});
  }
  addTodo(task) {
    // dummyData = dummyData.concat({task: task, completed: false});
    // this.setState({todos: dummyData});
    axios.post(dbUrl + '/add', {task: task})
    .then((response) => {
      this.setState({todos: this.state.todos.concat(response.data)});
    })
    .catch((error) => {
      console.log(error);
    });
  }
  removeTodo(index) {
    dummyData.splice(index, 1);
    this.setState({todos: dummyData});
  }
  toggleTodo(index) {
    dummyData[index].completed = !dummyData[index].completed;
    this.setState({todos: dummyData});
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
