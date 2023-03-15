import styled from 'styled-components';

/*
* styled.d.ts
    - typescript에서 theme를 선언하기 위한 기본 템플릿 파일
    - 여기서 styled-components 모듈의 DefaultTheme 인터페이스를 선언하고 export해서 
    - theme.ts 파일에서 이를 import해 또다른 theme를 확장.
*/

declare module 'styled-components' {
    export interface DefaultTheme {
        textColor: string;
        bgColor: string;
        btnColor: string;
        fontSize: string;
    }
}