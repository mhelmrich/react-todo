import React from 'react';

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

export default InputLine;
