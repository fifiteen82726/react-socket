import React, { Component } from 'react'
import Header from './components/Header'
import MessageList from './components/MessageList'
import MessageInput from './components/MessageInput'
import io from 'socket.io-client'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

class App extends Component {

  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      messages: []
    }
  }

  handleSubmit = message => {
    this.setState({ messages: [...this.state.messages, message]}, () => {
      console.log(this.state.messages)
    })
  }

  handleScrollToDown = () => {

  }

  render() {
    return (
      <div className="container">
        <Header />
        <MessageList messages={this.state.messages} />
        <MessageInput onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
