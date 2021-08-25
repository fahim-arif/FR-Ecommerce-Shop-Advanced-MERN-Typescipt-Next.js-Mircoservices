import React from "react";

import Product from "../components/Product";
import products from "../products";
import { Col, Row, Container } from "react-bootstrap";

import "../components/styles/HomeScreen.css";

const HomeScreen = () => {
  return (
    <>
      <h1>Hello world</h1>
      <section class='banner-section'>
        <div className='hero_section_container'>
          <div className='hero_section_sub_title'>Fashion Guide</div>
          <div className='hero_section_title'>FR Store</div>
          <div className='hero_section_sub_title2'>
            Shop the latest clothing, shoes, and handbags from top fashion
          </div>
          <button className='btn-dark hero_section_btn'>Shop Now</button>
        </div>
      </section>
      <h2 className='text-center home_screen_title'>LATEST PRODUCTS</h2>

      <Container>
        <Row>
          {products.map((product) => (
            <Col md={3}>
              <Product product={product} key={product._id}></Product>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
