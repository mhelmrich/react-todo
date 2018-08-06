import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import TodoApp from './components/TodoApp';
import Login from './components/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: ''
    }
  }
  componentDidMount() {
    axios.get('/username')
    .then((response) => {
      if (response.data.loggedIn) {
        this.setState({loggedIn: true, username: response.data.username});
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }
  login(username) {
    this.setState({loggedIn: true, username: username});
  }
  logout() {
    this.setState({loggedIn: false, username: ''});
  }
  render() {
    if (this.state.loggedIn) return <TodoApp username={this.state.username}
                                            logout={() => this.logout()}/>;
    return <Login login={(username) => this.login(username)}/>
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
