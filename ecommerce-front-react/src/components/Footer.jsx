import React from 'react';
import styled from 'styled-components';
import {
  Facebook,
  Instagram,
  Twitter,
  Room,
  Phone,
  AlternateEmail
} from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
  ${mobile({
    flexDirection: 'column'
  })}
`;
const Left = styled.div`
  width: 20rem;
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  padding: 1.3rem;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 1.3rem 0rem;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.3rem;
`;
const Center = styled.div`
  width: 20rem;
  /* flex: 1; */
  padding: 1.3rem;
  ${mobile({
    display: 'none'
  })}
`;
const Title = styled.h3`
  margin-bottom: 2.5rem;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 0.6rem;
`;

const Right = styled.div`
  /* flex: 1; */
  padding: 1.3rem;
`;
const ContactItem = styled.div`
  margin-bottom: 1.3rem;
  display: flex;
  align-items: center;
  margin-left: rem;
`;
const ContactItemSpan = styled.span`
  margin-left: 0.5rem;
`;
const Payment = styled.img`
  width: 50%;
`;

function Footer(props) {
  return (
    <Container>
      <Left>
        <Logo>Assia shop</Logo>
        <Desc>
          {' '}
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="#3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room />
          <ContactItemSpan>rue 10 n° 11 Lala Meriem Casablanca</ContactItemSpan>
        </ContactItem>
        <ContactItem>
          <Phone />
          <ContactItemSpan>+212 612345678</ContactItemSpan>
        </ContactItem>
        <ContactItem>
          <AlternateEmail />
          <ContactItemSpan> assia@gmail.com</ContactItemSpan>
        </ContactItem>
        <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC6D8fxHU5RmsTBIVNjuW5OlLUUAAVrrzI9w&usqp=CAU" />
      </Right>
    </Container>
  );
}

export default Footer;
