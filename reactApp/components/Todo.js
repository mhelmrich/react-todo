import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        <span onClick={() => this.props.toggle()}>
          {this.props.completed ? <strike>{this.props.task}</strike> : this.props.task}
        </span>
        <button onClick={() => this.props.xClick()}>X</button>
      </li>
    )
  }
}

export default Todo;
