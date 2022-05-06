import React from 'react';
import Send from '@material-ui/icons/Send';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 3.6rem;
  margin-bottom: 1.2rem;
`;
const Desc = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1.3rem;
  ${mobile({
    textAlign: 'center'
  })}
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #d9ab9a;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #d6a881;
    transform: scale(1, 1.3);
  }
`;
const InputContainer = styled.div`
  width: 50%;
  height: 2.4rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  &:hover ${Button} {
    background-color: #d6a881;
    transform: scale(1, 1.3);
  }
  ${mobile({
    width: '80%'
  })}
`;
const Input = styled.input`
  flex: 8;
  border: none;
  margin-left: 1.2rem;
`;

function Newsletter(props) {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite product.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default Newsletter;
