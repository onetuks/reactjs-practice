import styled, { keyframes } from "styled-components";
import Circle from './Circle';

function App() {
  return (
    <div>
      <Circle bgColor={"tomato"} borderColor={"teal"} />
      <Circle bgColor={"teal"} text={"My color is teal"} />
    </div>
  );
}

export default App;
