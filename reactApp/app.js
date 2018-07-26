import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = ["Learn about React", "Finish todo project", "Horizons speaker series"];

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>{this.props.task}</li>
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
        {dummyData.map((item) => (<Todo key={item} task={item}/>))}
      </ul>
    )
  }
}

ReactDOM.render(<TodoList />,
   document.getElementById('root'));
