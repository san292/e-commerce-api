import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Product from './Product';
import axios from 'axios';
const Container = styled.div`
  padding: 1.3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  // console.log('props----------------->', cat, filters, sort);
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  // console.log('filterProducts------->15', filterProducts);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : 'http://localhost:5000/api/products'
        );
        const res = response;
        // console.log('res------->', res.data);
        // console.log('res.categories------>>', res.categories);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [cat]);
  useEffect(() => {
    cat &&
      setFilterProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);
  useEffect(() => {
    if (sort === 'newest') {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'asc') {
      setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filterProducts.map((productItem) => (
            <Product key={productItem._id} productItem={productItem} />
          ))
        : products
            .slice(0, 6)
            .map((productItem) => (
              <Product key={productItem._id} productItem={productItem} />
            ))}
    </Container>
  );
};

export default Products;
