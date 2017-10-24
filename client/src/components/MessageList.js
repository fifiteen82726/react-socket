import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

const MessageList = props => {
  return (
    <Row>
      <Col sm={12}>
        <Card body>
          {
            props.messages.map((message, index) => {
              return <p key={index}>{message}</p>
            })
          }
        </Card>
      </Col>
    </Row>

  )
}

export default MessageList
