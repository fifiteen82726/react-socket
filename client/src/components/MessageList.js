import React from 'react'
import {
  Card,
  Row,
  Col
} from 'reactstrap';

const MessageList = props => {
  return (
    <Row>
      <Col sm={12}>
        <Card body>
          {
            props.messages.map((message, index) => {
              return <p key={index}>{message.username}:{message.content}</p>
            })
          }
        </Card>
      </Col>
    </Row>

  )
}

export default MessageList
