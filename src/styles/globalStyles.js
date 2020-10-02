import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   
    *, input, button {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 0;
        outline: none;
        user-select: none;
    }
   
   body{ 
       background: ${props => props.theme.colors.background};
       font-family: 'Inter', sans-serif;
   }
`;