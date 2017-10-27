import React, { Component } from 'react'
import Header from './components/Header'
import MessageList from './components/MessageList'
import UsernameInput from './components/UsernameInput'
import MessageInput from './components/MessageInput'
import io from 'socket.io-client'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

class App extends Component {

  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      username: '',
      messages: []
    }
  }

  handleSubmit = message => {
    this.setState({ messages: [...this.state.messages, message]})
  }

  handleChangeUsername = username => {
    this.setState({username: username})
  }

  render() {
    return (
      <div className="container">
        <Header />
        <MessageList messages={this.state.messages} />
        <UsernameInput onChange={this.handleChangeUsername} />
        <MessageInput username={this.state.username} onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
