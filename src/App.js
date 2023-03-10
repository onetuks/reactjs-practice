import styled from 'styled-components';

const Father = styled.div`
  display: flex;
`;

// <input/> 태그 > required 속성 : 폼 데이터가 서버로 제출되기 전 반드시 채워져 있어야 하는 입력 필드 명시
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
    <Father>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
