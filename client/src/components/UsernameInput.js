import React from 'react'
import {Input, Button, Row, Col} from 'reactstrap';

const UsernameInput = props => {

  const handleSubmit = event => {

    if (event.key === 'Enter' || event.type === 'click') {
      console.log(event.target.value);
      props.onSubmit(event.target.value)
    }

  }

  return (
    <Row>
      <Col sm={12}>
          <Input type="text" placeholder="Enter username ..." onKeyPress={handleSubmit}/>
          <div className="text-center mt-4">
            <Button outline size="lg" color="primary" className="mt-3">GO!</Button>
          </div>
      </Col>
    </Row>
  )
}

export default UsernameInput
