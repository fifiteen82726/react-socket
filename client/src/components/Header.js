import React, { Component } from 'react'
import {
  Row,
  Col
} from 'reactstrap';

class Header extends Component {
  render() {
    return(
      <Row>
        <Col sm={12}>
          <div className="text-center pt-3">
            <h1>React + Socket.io</h1>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Header
