import React, {Component} from 'react'
import {Input, Button, Row, Col} from 'reactstrap';

class LoginForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: ''
    }
  }

  handleSubmit = event => {
    if (event.key === 'Enter' || event.type === 'click') {
      this.props.onSubmit(event.target.value)
    }
  }

  handleChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className="loginBox">
        <Input
          type="text"
          size="lg"
          placeholder="Got a nickname?"
          value={this.props.username}
          onChange={this.handleChangeUsername}
          onKeyPress={this.handleSubmit}/>
      </div>
    )
  }
}

export default LoginForm
