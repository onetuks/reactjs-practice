import styled, { keyframes } from 'styled-components';

const Wraper = styled.div`
  display: flex;
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

const Box = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnim} 1s linear infinite;
  span {
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
  return (
    <Wraper>
      <Box>
        <span>😊</span>
      </Box>
    </Wraper>
  );
}

export default App;