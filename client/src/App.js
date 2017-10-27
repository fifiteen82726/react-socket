import React, { Component } from 'react'
import Header from './components/Header'
import MessageList from './components/MessageList'
import UsernameInput from './components/UsernameInput'
import MessageInput from './components/MessageInput'
import io from 'socket.io-client'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

class App extends Component {

  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeUsername = this.handleChangeUsername.bind(this)

    this.state = {
      username: '',
      messages: []
    }
  }

  componentDidMount() {
    this.socket = io('http://localhost:4000')
    this.socket.on('message', message => {
      this.setState({ messages: [...this.state.messages, message]})
    })
  }

  handleSubmit = message => {
    this.setState({ messages: [...this.state.messages, message]})
    this.socket.emit('message', message)
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
