import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   
    *, input, button {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 0;
        outline: none;
        user-select: none;
    }
   
   body{ 
       background-color: #5E81F4;
       font-family: 'Inter', sans-serif;
   }
`;

export default GlobalStyles;