import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 3rem;
  background-color: #d9ab9a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 500;
  ${mobile({
    fontSize: '1rem'
  })}
`;

function Announecement() {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
}

export default Announecement;
