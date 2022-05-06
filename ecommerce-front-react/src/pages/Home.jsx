import React from 'react';
import styled from 'styled-components';
import Announecement from '../components/Announecement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider';

function Home(props) {
  const Container = styled.div`
    /* max-width: 200rem; */
  `;
  return (
    <Container>
      <Announecement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Home;
