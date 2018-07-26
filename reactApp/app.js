import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = [{taskText: "Learn about React", completed: true},
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
        {dummyData.map((item) => (<Todo key={item.taskText} task={item.taskText} completed={item.completed}/>))}
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
  }
  render() {
    return (
      <div>
        <InputLine/>
        <TodoList/>
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
