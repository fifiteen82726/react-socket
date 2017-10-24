import React, { Component } from 'react'
import Header from './components/Header'
import MessageList from './components/MessageList'
import MessageInput from './components/MessageInput'
import io from 'socket.io-client'
import './App.css'

class App extends Component {

  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      messages: []
    }
  }

  handleSubmit = (message) => {
    console.log("");
    this.setState({ messages: [message, ...this.state.messages]}, () => {
      console.log(this.state.messages)
    })

  }

  render() {
    return (
      <div className="App">
        <Header />
        <MessageList />
        {
          this.state.messages.map((message, index) => {
            return <p key={index}>{message}</p>
          })
        }
        <MessageInput onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
