import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Cart from './Cart'

class ClassicTee extends React.Component {
    state = {
      quantity: 0,
      selectedSize: ''
    }

    updateSize (size) {
      this.setState({
        selectedSize: size
      })
    }

    updateCart = (quantity) => {
      this.setState({ quantity: quantity })
    }

    render () {
      return (
      <>

        <Row className="header">
          <img src={'./images/cart.png'} className='cartImage' width='25' height='25'alt=''>
          </img>
          <div className="cartText" > My Cart ( {this.state.quantity} )

            <div className='floatCart'> My Cart ( {this.state.quantity} ) <Cart /></div>

          </div>
        </Row>


<div className="container">
  <Row>
    <Col xs='12' md='8' lg='6'>
      <img src={'./images/classic-tee.jpg'} width="400" height="600" alt=""></img>
    </Col>
    <Col xs='12' md='8' lg='6'>
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
          <div className="size">SIZE <span className='star'>*</span> {this.state.selectedSize}</div>

          <button className='buttonSizes' onClick={() => this.updateSize('S')}>S</button>
          <button className='buttonSizes' onClick={() => this.updateSize('M')}>M</button>
          <button className='buttonSizes'onClick={() => this.updateSize('L')}>L</button>

        </div>

        <button className='addToCartButton' onClick={() => this.updateCart()}>ADD TO CART</button>
      </div>
    </Col>
  </Row>
</div>

      </>
      )
    }
}

export default ClassicTee
