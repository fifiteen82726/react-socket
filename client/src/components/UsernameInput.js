import React from 'react'
import {Input, Row, Col} from 'reactstrap';

const UsernameInput = props => {

  const handleSubmit = event => {

    props.onChange(event.target.value)

  }

  return (
    <Row>
      <Col sm={12}>
        <Input type="text" placeholder="Enter username ..." onChange={handleSubmit}/>
      </Col>
    </Row>
  )
}

export default UsernameInput
