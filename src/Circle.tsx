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

// typescript optional 선언
// 1번 방법 key?: type;
// 2번 방법 key: type | undefined;
interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

// a ?? b -> a가 undefined가 아니면 a / undefined면 b
function Circle({ bgColor, borderColor, text="default text" }: CircleProps) {
  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor ?? bgColor}
    >
        {text}
    </Container>
  );
}

export default Circle;
