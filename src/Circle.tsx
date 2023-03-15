import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.bgColor};
  width: 400px;
  height: 400px;
  border-radius: 200px;
  border: 3px solid ${(props) => props.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
//   const [counter, setCounter] = useState(0);
    const [counter, setCounter] = useState<number|string>(0);
//   setCounter("hi");
//   setCounter(0);
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}

export default Circle;
