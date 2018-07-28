import React from 'react';
import TodoList from './TodoList';
import InputLine from './InputLine';

let dummyData = [{taskText: "Learn about React", completed: true},
                 {taskText: "Finish todo project", completed: false},
                 {taskText: "Horizons speaker series", completed: false}];

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
    dummyData = dummyData.concat({taskText: task, completed: false});
    this.setState({todos: dummyData});
  }
  render() {
    return (
      <div id="todo-box">
        <InputLine submit={(task) => this.addTodo(task)}/>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default TodoApp;
