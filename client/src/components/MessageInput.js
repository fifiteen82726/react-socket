import React from 'react'
import {
  Input,
  Row,
  Col
} from 'reactstrap';

const MessageInput = props => {

  const handleSubmit = event => {
    if (event.key === 'Enter') {
      const message = {
        username: 'GM',
        content: event.target.value
      }
      props.onSubmit(message)
      event.target.value = ''
    }
  }

  return (
    <Row>
      <Col sm={12}>
        <Input type="message" placeholder="Enter message ..." onKeyPress={handleSubmit}/>
      </Col>
    </Row>
  )
}

export default MessageInput
