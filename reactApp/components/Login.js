import React from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true
    }
  }
  switchForms() {
    this.setState({login: !this.state.login});
  }
  login(username, password) {
    axios.post('/login', {username, password})
    .then((resp) => {
      if (resp.data.success) this.props.login(username);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  register(username, password) {
    axios.post('/register', {username, password})
    .then((resp) => {
      if (resp.data.success) this.setState({login: true});
    })
    .catch((err) => {
      console.log(err);
    });
  }
  render() {
    if (this.state.login) return <LoginForm toRegistration={() => this.switchForms()}
      login={(username, password) => this.login(username, password)}/>
    return <p>Registration goes here</p>
  }
}

export default Login;
