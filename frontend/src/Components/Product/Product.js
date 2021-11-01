import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Product.css'

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 product-card">
      <Link to={`/product/${product._id}`}>
        <Card.Img className="view zoom" src={product.image}></Card.Img>
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">{product.name}</Card.Title>
        </Link>
      </Card.Body>

      <Card.Text as="h3">{product.price}</Card.Text>
    </Card>
  )
}

export default Product
