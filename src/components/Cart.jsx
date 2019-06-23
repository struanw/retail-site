import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Cart extends Component {
  state = {

  }
  render () {
    return (
      <div>
        <Row>
          <Col>
            <br/>
            <br/>
            <img src={'./images/classic-tee.jpg'} width='95' height='140' alt=''/>
          </Col>

          <Col>
            <br/>
            <br/>
            <p>Classic Tee</p>
            <p>1x <b>$75.00</b></p>
            <p>Size: S</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <br/>
            <br/>
            <img src={'./images/classic-tee.jpg'} width='95' height='140' alt=''/>
          </Col>
          <Col>
            <br/>
            <br/>
            <p>Classic Tee</p>
            <p>3x <b>$75.00</b></p>
            <p>Size: L</p>
          </Col>
        </Row>
      </div>
    )
  }
}
