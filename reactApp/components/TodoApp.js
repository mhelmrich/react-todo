import React from 'react';
import TodoList from './TodoList';
import InputLine from './InputLine';

const dummyData = [{taskText: "Learn about React", completed: true},
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
  render() {
    return (
      <div id="todo-box">
        <InputLine/>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default TodoApp;
