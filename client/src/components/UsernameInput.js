import React from 'react'
import {Input, Row, Col} from 'reactstrap';

const UsernameInput = props => {

  const handleSubmit = event => {

    props.onChange(event.target.value)

  }

  return (
    <Row>
      <Col sm={12}>
        <div>
          <Input type="text" placeholder="Enter username ..." onChange={handleSubmit}/>
        </div>
      </Col>
    </Row>
  )
}

export default UsernameInput
