import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import Category from './Category';
import { mobile } from '../responsive';
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;
  ${mobile({
    flexDirection: 'column',
    padding: '0rem'
  })}
`;
function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <Category key={item.id} item={item} />
      ))}
    </Container>
  );
}

export default Categories;
