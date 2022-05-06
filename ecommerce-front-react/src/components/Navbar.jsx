import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Container = styled.div`
  height: 5rem;
  ${mobile({
    height: '3rem'
  })}
`;
const Wrapper = styled.div`
  padding: 0.6rem 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    padding: '0.6rem 0rem'
  })}
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;
`;
const Language = styled.span`
  font-size: 1.2srem;
  cursor: pointer;
  ${mobile({
    display: 'none'
  })}
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid lightgray;
  margin-left: 0.5rem;
  padding: 0.5rem;
  border-radius: 5%;
`;
const Input = styled.input`
  border: none;

  ${mobile({
    width: '3rem'
  })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.div`
  font-weight: bold;
  font-size: 2.4rem;
  ${mobile({
    fontSize: '1rem',
    marginLeft: '0.6rem'
  })}
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  ${mobile({
    justifyContent: 'center',
    flex: 2
  })}
`;
const MenuItem = styled.div`
  font-size: 1.3rem;
  cursor: pointer;
  margin-left: 1.6rem;
  ${mobile({
    fontSize: '0.8rem',
    marginLeft: '0.8rem'
  })}
`;

function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  console.log('cart-------------->', quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>Assia Shop</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGNIN</MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
