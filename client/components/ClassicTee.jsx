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
          <Row className ='header justify-content-end'>
            <div>Cart</div>
          </Row>
        

     
          <Row>
            <Col>
              <img src={'./images/classic-tee.jpg'} className='tee-image' width="400" height="600" alt=""></img>
            </Col>
            <Col>
            <p>Classic Tee</p>
            <p className = 'price'>$75</p>
            <p className = 'text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
            <div>
            <button>s</button>
            <button>m</button>
            <button>L</button>
            </div>
            <br/>

            <button>add to cart</button>
            
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}

export default ClassicTee
