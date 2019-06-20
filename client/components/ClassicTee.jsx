import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// import Cart from './Cart'

class ClassicTee extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Container>
          <Row className='header justify-content-end'>
            <div>Cart</div>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <img src={'./images/classic-tee.jpg'} className='tee-image' width="400" height="600" alt=""></img>
            </Col>
            <Col>text</Col>
          </Row>
        </Container>

      </div>
    )
  }
}

export default ClassicTee
