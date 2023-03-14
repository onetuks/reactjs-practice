import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";

/*
  * Styld-Components > Theme 적용법
  1. index.js 에 ThemeProvider import
  2. 적용할 테마 object 선언
  3. 적용될 컴포넌트 상위에 ThemeProvider 컴포넌트 씌우기
  4. ThemeProvider 컴포넌트 props에 생성한 테마 object 전달
  5. 적용될 컴포넌트에서 styled-component에서 props를 이용하여 테마 적용
*/

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
