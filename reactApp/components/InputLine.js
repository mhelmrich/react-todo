import React from 'react';

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="your task"/>
        <button onClick={() => this.props.submit("Test Task")}>Submit</button>
      </div>
    )
  }
}

export default InputLine;
