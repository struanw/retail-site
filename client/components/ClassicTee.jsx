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
      <>

        <Row className="header">
          <div className="cartText"> My Cart ( 0 ) </div>
        </Row>

<div className="container">
  <Row>
    <Col>
      <img src={'./images/classic-tee.jpg'} width="440" height="660" alt=""></img>
    </Col>
    <Col>
      <div className="rightSide">
        <p className='title'>Classic Tee</p>
        <div className="line"></div>
        <p className= 'price'>$75.00</p>
        <div className="line"></div>
        <br/>
        <p className= 'text'>Dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
        <div>
          <br/>
          <div className="size">SIZE <span className='star'>*</span> </div>
          

          <button className='buttonSizes'>S</button>
          <button className='buttonSizes'>M</button>
          <button className='buttonSizes'>L</button>

        </div>

        <button className='addToCartButton'>ADD TO CART</button>
      </div>
    </Col>
  </Row>
</div>

      </>
    )
  }
}

export default ClassicTee
