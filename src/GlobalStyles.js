import {createGlobalStyle} from "styled-components";


export const GlobalStyles = createGlobalStyle`
  :root{
    --primary: #151d27;
    --secondary: #2a3a4f;
    --background:#f0f1fa;
    --Gray:#262626;
    --DarkGray: #1d2631
    --card:#263241;
    --light: #FFFFFF;
    --color-text: #96a6b7;
  }
  ::-webkit-scrollbar{
        width:4px;
        background-color:var(--secondary);
    }
    ::-webkit-scrollbar-track{
        background-color: var(--secondary);
    }
    ::-webkit-scrollbar-thumb{
        border-radius:2px;
        background-color: var(--light);
    }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    color: var(--color-text);
    background-color: var(--primary);
    font-family: 'Roboto', sans-serif;
    
  }
  button{
    border: 1px solid #435467;
    background: rgba(95,115,138,.3);
    :hover{
      cursor: pointer;
      background-color: #c33;
    }
  }

`;