import React from 'react'
import {
  Input,
  Row,
  Col,
  Button,
  InputGroup,
  InputGroupButton
} from 'reactstrap';

const MessageInput = props => {

  const handleSubmit = event => {

    // console.log(event.key, event.type, event.target.value);

    if (event.key === 'Enter' || event.type === 'click') {

      if (props.username) {

        if (event.target.value === '') {
          alert("Please Enter message ...")
          return
        }

        const message = {
          username: props.username,
          content: event.target.value
        }

        props.onSubmit(message)
        event.target.value = ''

      } else {
        alert("Please Enter username ...")
        return
      }
    }
  }

  return (
    <Row>
      <Col sm={12}>
        <InputGroup>
          <Input type="text" placeholder="Enter message ..." onKeyPress={handleSubmit}/>
          <InputGroupButton>
            <Button color="info" onClick={handleSubmit}>Submit</Button>
          </InputGroupButton>
        </InputGroup>
      </Col>
    </Row>
  )
}

export default MessageInput
