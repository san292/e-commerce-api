import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowRight, ArrowLeft } from '@material-ui/icons';
import { sliderItems } from '../data';
import { mobile } from '../responsive';
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: whitesmoke;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({
    display: 'none'
  })}
`;

const Arrow = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '0.6rem'};
  right: ${(props) => props.direction === 'right' && '0.6rem'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 3rem;
`;
const Title = styled.h1`
  font-size: 4.3rem;
`;
const Desc = styled.p`
  margin: 3rem 0rem;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0.19rem;
`;
const Button = styled.button`
  padding: 0.6rem;
  font-size: 1.3rem;
  background-color: transparent;
  cursor: pointer;
`;

function Slider(props) {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 0 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRight />
      </Arrow>
    </Container>
  );
}

export default Slider;
