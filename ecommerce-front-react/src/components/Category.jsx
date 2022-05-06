import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  margin: 0.19rem;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  ${mobile({
    height: '20vh'
  })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({
    height: '20vh'
  })}
`;
const Title = styled.h1`
  margin-top: 1.3rem;
  color: white;
  font-size: 1.5rem;
`;

const Button = styled.button`
  border: none;
  color: #bebcba;
  padding: 0.6rem;
  background-color: white;
  font-weight: 600;
  cursor: pointer;
`;
function Category({ item }) {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
}

export default Category;
