import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 1.2rem;
  background-color: whitesmoke;
  ${mobile({
    width: ' 80%'
  })}
`;
const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Button = styled.button`
  padding: 1rem;
  cursor: pointer;
  border: none;
  width: 30%;
  background-color: white;
  &:hover {
    background-color: #d9ab9a;
    color: white;
  }
`;
const Agreement = styled.span`
  font-size: 1.1rem;
  margin: 1.2rem 0rem;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 1.2rem 0.6rem 0rem 0rem;
  padding: 0.6rem;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder=" name" />
          <Input placeholder=" lastname" />
          <Input placeholder=" username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            {' '}
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
