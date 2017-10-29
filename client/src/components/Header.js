import React, {Component} from 'react'
import {Row, Col} from 'reactstrap'
import TiUser from 'react-icons/lib/ti/user'

const Header = (props) => {
  return (
    <Row>
      <Col sm={12}>
        <div className="text-center pt-3">
          <h1>
            <TiUser />{props.clients}
          </h1>
        </div>
      </Col>
    </Row>
  )
}

export default Header
