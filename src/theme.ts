import { DefaultTheme } from 'styled-components';

/*
* theme.ts
    - styled.d.ts 의 DefaultTheme를 import해서 커스터마이징 (테마 확장)
    - 만든 테마는 export해서 다른 곳에서 사용할 수 있도록 해야함. 
*/

export const lightTheme: DefaultTheme = {
    bgColor: "whitesmoke",
    textColor: "#111",
    btnColor: "tomato",
    fontSize: "40px",
}

export const darkTheme: DefaultTheme = {
    bgColor: "#111",
    textColor: "whitesmoke",
    btnColor: "teal",
    fontSize: "40px",
}