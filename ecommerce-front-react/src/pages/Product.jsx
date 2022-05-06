import { Add, Remove } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Announecement from '../components/Announecement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';
import { publicRequest } from '../requestmethod';
import { addProduct } from '../redux/cartRedux';

import { useDispatch } from 'react-redux';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 3rem;
  display: flex;
  ${mobile({
    padding: '0.6rem',
    flexDirection: 'column'
  })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  ${mobile({
    height: '40vh'
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0rem 3rem;
  ${mobile({
    padding: '0.6rem'
  })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 1.2rem 0rem;
  font-size: 1.5rem;
  font-weight: 300;
`;
const Price = styled.span`
  font-weight: 200;
  font-size: 3rem;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 1.8rem 3rem;
  display: flex;
  justify-content: space-between;
  ${mobile({
    width: '100%',
    margin: ' 1rem 0rem'
  })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-weight: 200;
  font-size: 1.5rem;
`;
const FilterColor = styled.select`
  width: 2rem;
  height: 2rem;
  padding: 1rem;
  border-radius: 50%;
  margin: 0rem 0.3rem;
  cursor: pointer;
  background-color: ${(props) => props.color};
`;
const FilterSize = styled.select`
  margin-left: 1rem;
  padding: 0.3rem;
  ${mobile({
    marginLeft: '1 rem'
  })}
`;
const FilterSizeOption = styled.option`
  ${mobile({
    margin: '0rem'
  })}
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: space;
  justify-content: space-between;
  ${mobile({
    width: '100%'
  })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
`;
const Amount = styled.span`
  width: 2rem;
  height: 2rem;
  border-radius: 0.6rem;
  border: 1px solid #d9ab9a;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0rem 0.3rem;
`;
const Button = styled.button`
  padding: 1rem;
  border: 3px solid #d9ab9a;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #d9ab9a;
    color: white;
  }
`;

function Product(props) {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  // console.log('id------------------->', id);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        // const res = await axios.get(
        //   `http://localhost:5000/api/products/find/${id}`
        // );
        // console.log('res------------>product', res.data);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === 'inc') {
      return setQuantity(quantity + 1);
    }
    if (quantity > 0 && type === 'desc') {
      return setQuantity(quantity - 1);
    }
  };

  const handleAddCART = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <Container>
      <Navbar />
      <Announecement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price> $ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color &&
                product.color.map((c) => (
                  <FilterColor color={c} key={c} onClick={(e) => setColor(c)} />
                ))}
            </Filter>
            <Filter>
              <FilterTitle>SIZE</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size &&
                  product.size.map((s) => (
                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                  ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity('desc')} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity('inc')} />
            </AmountContainer>
            <Button onClick={handleAddCART}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Product;
