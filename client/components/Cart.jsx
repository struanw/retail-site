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
            <img src={'./images/classic-tee.jpg'} className='cart-image' width='95' height='140' alt=''/>
          </Col>

          <Col>
            <br/>
            <br/>
            <p>Classic Tee</p>
            <p>1x $75.00</p>
            <p>Size: S</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <br/>
            <br/>
            <img src={'./images/classic-tee.jpg'} className='cart-image' width='95' height='140' alt=''/>
          </Col>
          <Col>
            <br/>
            <br/>
            <p>Classic Tee</p>
            <p>3x $75.00</p>
            <p>Size: L</p>
          </Col>
        </Row>
      </div>
    )
  }
}
