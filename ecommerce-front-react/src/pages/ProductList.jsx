import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announecement from '../components/Announecement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';

const Container = styled.div``;
const Title = styled.h1`
  margin: 1rem 2rem;
  font-size: 3rem;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 1.3rem;
  ${mobile({
    margin: ' 0rem 1.3rem',
    display: 'flex',
    flexDirection: 'column'
  })}
`;
const FilterText = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  margin-right: 1rem;
  ${mobile({
    fontSize: '0.8rem',
    marginRight: '0rem'
  })}
`;
const Select = styled.select`
  margin-right: 1rem;
  padding: 0.6rem;
  ${mobile({
    marginRight: '0rem'
  })}
`;
const Option = styled.option`
  font-size: 1.2rem;
  ${mobile({
    fontSize: '0.5rem'
  })}
`;
const Price = styled.option`
  font-size: 1.2rem;
  ${mobile({
    fontSize: '0.5rem'
  })}
`;

function ProductList(props) {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value
    });
    // console.log('setfilters----------->', filters);
  };
  const handleSort = (e) => {
    setSort(e.target.value);
  };
  return (
    <Container>
      <Navbar />
      <Announecement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products :</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products :</FilterText>
          <Select onChange={handleSort}>
            <Option value="newest">NEWEST</Option>
            <Price value="asc">price (asc)</Price>
            <Price value="desc">price (desc)</Price>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} sort={sort} filters={filters} />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList;
