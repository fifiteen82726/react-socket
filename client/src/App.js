import React, {Component} from 'react'
import ChatBox from './components/ChatBox'
import LoginForm from './components/LoginForm'
import io from 'socket.io-client'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

const socketUrl = 'http://localhost:4000'

class App extends Component {

  constructor() {
    super()

    this.state = {
      socket: null,
      username: ''
    }
  }

  componentDidMount() {
    const socket = io(socketUrl)
    this.setState({socket: socket})
  }

  handleGetUsername = username => {
    const { socket } = this.state
    socket.emit('newUser', username)
    console.log(username);
    this.setState({username: username})
  }

  render() {
    const {socket, username} = this.state;

    return (
      <div className="container">
        {
          username
          ? <ChatBox socket={socket} username={username} />
          : <LoginForm socket={this.state.socket} onSubmit={this.handleGetUsername}/>
        }
      </div>
    );
  }
}

export default App;
