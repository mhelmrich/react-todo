import React from 'react';

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  handleTyping(event) {
    this.setState({text: event.target.value});
  }
  handleSubmit(event) {
    this.props.submit(this.state.text);
    this.setState({text: ''});
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.text} placeholder="Add a task.."
          onChange={(event) => this.handleTyping(event)}/>
        <button onClick={(event) => this.handleSubmit(event)}>Submit</button>
      </div>
    )
  }
}

export default InputLine;
