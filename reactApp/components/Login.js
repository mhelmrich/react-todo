import React from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

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
  register(email, username, password) {
    axios.post('/register', {email, username, password})
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
    return <RegistrationForm toLogin={() => this.switchForms()}
      register={(email, username, password) => this.register(email, username, password)}/>
  }
}

export default Login;
