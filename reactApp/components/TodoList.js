import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        {this.props.todos.map((item, index) =>
          (<Todo key={index} task={item.taskText} completed={item.completed}
            xClick={() => this.props.todoXClick(index)}
            toggle={() => this.props.todoToggle(index)}/>))}
      </ul>
    )
  }
}

export default TodoList;
