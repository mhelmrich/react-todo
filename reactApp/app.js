import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = [{taskText: "Learn about React", completed: true},
                 {taskText: "Finish todo project", completed: false},
                 {taskText: "Horizons speaker series", completed: false}];

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>{this.props.completed ? <strike>{this.props.task}</strike> : this.props.task}</li>
    )
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        {this.props.todos.map((item) =>
          (<Todo key={item.taskText} task={item.taskText} completed={item.completed}/>))}
      </ul>
    )
  }
}

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="your task"/>
        <button>Submit</button>
      </div>
    )
  }
}

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

ReactDOM.render(<TodoApp />, document.getElementById('root'));
