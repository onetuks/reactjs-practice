import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Wraper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
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
      font-size: 48px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  const [stop, setStop] = useState(false);

  function changeStop() {
    setStop((current) => !current);
  }

  return (
    <Wraper>
      <Title>Hello</Title>
      <Box>
        {/* 얘는 Box 컴포넌트 내에서 span 태그 말고 Emoji태그로 선언한 경우이므로, as, attr 적용시 모두 정상적으로 스타일 적용됨. */}
        <Emoji>😊</Emoji>
        {/* 얘는 Box 컴포넌트 내에서 span 태그를 명시해서 선언한 경우 스타일 적용 안 됨 (현재 p태그로 렌더링되므로) */}
        <Emoji as="p">🤩</Emoji>
      </Box>
      {/* 얘는 Box 컴포넌트 밖에 있으므로, Box 컴포넌트 내에 선언한 스타일 적용이 안 됨. */}
      <Emoji>💥</Emoji>
    </Wraper>
  );
}

export default App;