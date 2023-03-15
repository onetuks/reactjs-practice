import { useState } from "react";
import styled, { keyframes } from "styled-components";

function App() {
  const [value, setValue] = useState("");

  // event: 리액트.이벤트발생위치<이벤트발생요소,요인>
  // event: 리액트.폼이벤트에서발생<인풋요소에서 발생>
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // currentTarget가 value와 같은 string 타입이어야 함을 명시함.
    const {
      currentTarget: { value },
    } = event;
    // value state 초기값이 string이므로, setValue에 인자로 주어진 value 또한 string 타입 체크가 가능.
    setValue(value);
    console.log(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          placeholder="username"
          type="text"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
