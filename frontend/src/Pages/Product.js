import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap'

import { productDetailAction } from '../action/productAction'

const Product = ({ history, match }) => {
  const dispatch = useDispatch()

  const productDetail = useSelector((state) => state.productDetail)
  const { loading, product } = productDetail

  useEffect(() => {
    dispatch(productDetailAction(match.params.id))
  }, [dispatch, match])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}`)
  }

  return (
    <div className="mt-5">
      {loading ? (
        <h2>در حال دریافت اطلاعات...</h2>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} fluid />
          </Col>

          <Col md={6}>
            <ListGroup variant="flush" className="p-3 mt-2">
              <ListGroup.Item className="my-3">
                <h2>{product.name}</h2>
              </ListGroup.Item>

              <ListGroup.Item className="my-3">
                {product.description}
              </ListGroup.Item>

              <ListGroup.Item className="my-3">
                قیمت: {product.price}
              </ListGroup.Item>
            </ListGroup>

            <Button
              onClick={addToCartHandler}
              className="btn-block mt-4"
              type="button"
            >
              افزودن به سبد خرید
            </Button>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default Product
