import React, { Component } from 'react'
import Header from './components/Header'
import MessageList from './components/MessageList'
import MessageInput from './components/MessageInput'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MessageList />
        <MessageInput />
      </div>
    );
  }
}

export default App;
