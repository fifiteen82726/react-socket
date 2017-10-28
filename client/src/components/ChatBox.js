import React, {Component} from 'react'
import Header from './Header'
import MessageList from './MessageList'
import MessageInput from './MessageInput'

export default class Chatbox extends Component {

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubmitUsername = this.handleSubmitUsername.bind(this)

    this.state = {
      clients: '',
      username: '',
      messages: []
    }
  }

  componentDidMount() {

    const {socket} = this.props

    console.log("ChatBox DidMount");

    socket.on('clientCount', clientCount => {
      this.setState({clients: clientCount});
    })

    socket.on('message', message => {
      this.setState({
        messages: [
          ...this.state.messages,
          message
        ]
      })
    })

  }

  handleSubmit = message => {

    const {socket} = this.props

    this.setState({
      messages: [
        ...this.state.messages,
        message
      ]
    })
    socket.emit('message', message)
  }

  handleSubmitUsername = username => {
    this.setState({username: username})
  }

  render() {
    return (
      <div className="container">
        <Header clients={this.state.clients}/>
        <MessageList messages={this.state.messages}/>
        <MessageInput username={this.props.username} onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
