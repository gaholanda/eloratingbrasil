import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 16px;
  }
  body{
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;