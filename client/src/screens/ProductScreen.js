import React, { useState } from "react";
import "../components/styles/ProductDetails.css";
import {
  ListGroup,
  Container,
  Row,
  Col,
  Image,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = ({ match, history }) => {
  const { id } = match.params;
  const [qty, setQty] = useState(1);

  const addToCarthandler = () => {
    history.push(`/cart/${id}?qty=${qty}`);
  };
  return (
    <Container>
      <Row className='product_details'>
        <Col md={5}>
          <Image src={products[id].image} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h4>{products[id].name}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={products[id].rating}
                text={products[id].numReviews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Price : {products[id].price}</h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className='product_details_item_description'>
                {products[id].description}
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup style={{ border: "hidden" }} variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price: </Col>
                  <Col>
                    <strong>${products[id].price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {products[id].countInStock > 0
                      ? "In Stock"
                      : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Qty:</Col>
                  <Col>
                    <Form.Control
                      as='select'
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(products[id].countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  onClick={addToCarthandler}
                  className='btn-block'
                  type='button'
                  disabled={products.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductScreen;
