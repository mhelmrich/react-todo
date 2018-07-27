import React from 'react';
import Todo from './Todo';

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

export default TodoList;
