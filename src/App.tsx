import { useState } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor}
`;

// Theme에서 선언한 내용이 아니라, 지역적으로 선언한 CSS 값을 적용하기 위해선
// 이렇게 interface를 구축하고, styled-component가 상속하게 하여 적용
interface TitleProps {
  fontSize?: string;
}

// props.fontSize (지역변수)가 존재하면 지역변수로 CSS를 렌더링하고,
// props.fontSize (지역변수)가 undefined이면 theme(전역변수)로 CSS 렌더링
const Title = styled.span<TitleProps>`
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) => props.fontSize ?? props.theme.fontSize};
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [username, setUsername] = useState("");
  const [login, setLogin] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLogin(true);
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: {value},
    } = event;
    setUsername(value);
  };

  return (
    <Wrapper>
      <Title>Hello Stranger</Title>
      <form onSubmit={onSubmit}>
        <input
          value={username}
          onChange={onChange}
          placeholder="username"
          type="text"
          disabled={login}
        />
        <button>Log in</button>
      </form>
      {login ? (
        <Title fontSize="20px">Welcome, {username}!!</Title>
      ) : (
        <Title fontSize="20px">Please Log In</Title>
      )}
    </Wrapper>
  );
}

export default App;