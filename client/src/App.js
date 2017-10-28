import React, {Component} from 'react'
import Header from './components/Header'
import MessageList from './components/MessageList'
import UsernameInput from './components/UsernameInput'
import MessageInput from './components/MessageInput'
import io from 'socket.io-client'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

let socket = io('http://localhost:4000')

class App extends Component {

  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeUsername = this.handleChangeUsername.bind(this)

    this.state = {
      clients: '',
      username: '',
      messages: []
    }
  }

  componentDidMount() {
    console.log("DidMount ...");
    socket.on('init', client => {
      console.log(client);
      this.setState({clients:client});
    })
    socket.on('message', message => {
      this.setState({ messages: [ ...this.state.messages, message ] })
    })
    socket.on('clientCount', clinet => {
      this.setState({clients: clinet});
    })
  }

  handleSubmit = message => {
    this.setState({
      messages: [
        ...this.state.messages,
        message
      ]
    })
    socket.emit('message', message)
  }

  handleChangeUsername = username => {
    this.setState({username: username})
  }

  render() {

    const username = this.state.username;

    const Main = (
      <div>
        <Header clients={this.state.clients} />
        <MessageList messages={this.state.messages}/>
        <MessageInput username={this.state.username} onSubmit={this.handleSubmit}/>
      </div>
    )
    const Login = (
      <div className='loginBox'>
        <UsernameInput onSubmit={this.handleChangeUsername}/>
      </div>
    )

    return (
      <div className="container">
        {
          username ? Main : Login
        }
      </div>
    );
  }
}

export default App;
