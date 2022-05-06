import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { login } from '../redux/apiCalls';
import { mobile } from '../responsive';
// import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 1.2rem;
  background-color: whitesmoke;
  ${mobile({
    width: ' 80%'
  })}
`;
const Title = styled.h1`
  display: flex;

  justify-content: center;
  font-size: 1.5rem;
  font-weight: 400;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 1.2rem 0;
  padding: 0.6rem;
`;
const Link = styled.a`
  margin: 0.6rem;
  font-size: 1rem;
  text-decoration: underline;
`;
const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN </Title>
        <Form>
          <Input
            name="email"
            type="email"
            placeholder={email}
            onChange={handleEmail}
          />
          <Input
            name="password"
            placeholder={password}
            onChange={handlePassword}
          />
          <Button onClick={handleClick}>LOGIN</Button>
          {Error && <Error>Une erreur s'est produite</Error>}
          <Link>DO NOT REMUMBER THE PASSWORD</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
