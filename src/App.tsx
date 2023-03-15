import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;

const Title = styled.span`
  color: ${(props) => props.theme.textColor};
`;

const rotationAnim = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 30px;
`;

const Box = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnim} 1s linear infinite;
  ${Emoji} {
    font-size: 30px;
    &:hover {
      font-size: 40px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

function App() {
  return (
    <Container>
      <Title>Hello</Title>
      <Box>
        <Emoji>😁</Emoji>
        <Emoji as="p">🤩</Emoji>
      </Box>
      <Circle>
        <Emoji>💥</Emoji>
      </Circle>
    </Container>
  );
}

export default App;
