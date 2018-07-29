import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) =>
          (<Todo key={todo._id} task={todo.task} completed={todo.completed}
            xClick={() => this.props.todoXClick(index)}
            toggle={() => this.props.todoToggle(index)}/>))}
      </ul>
    )
  }
}

export default TodoList;
