import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  submit() {
    axios.post('/login', {username: this.state.username,
                          password: this.state.password})
    .then((resp) => {
      if (resp.data.success) {
        let username = this.state.username;
        this.setState({username: '', password: ''});
        this.props.login(username);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }
  render() {
    return (
      <div id="loginForm">
        <input id="username" type="text" placeholder="Username"
          onChange={(event) => this.handleUsernameChange(event)}/>
        <input id="password" type="password" placeholder="Password"
          onChange={(event) => this.handlePasswordChange(event)}/>
        <button onClick={() => this.submit()}>Log in</button>
      </div>
    )
  }
}

export default Login;
