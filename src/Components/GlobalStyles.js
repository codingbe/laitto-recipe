import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:boerder-box;
    }
    #root{
        display:grid;
        grid-template-columns:repeat(2, 1fr);
        grid-auto-rows:200px;
        justify-content:center;
        align-items:center;
        text-align:center;
        margin-top:70px;
        gap:40px;
        padding:40px 10px;
    }
    body{ -ms-overflow-style: none; } ::-webkit-scrollbar { display: none; }
    @media ( max-width: 400px ) {
        #root{
            display:grid;
            grid-template-columns:repeat(1, 0.95fr);
            grid-auto-rows:200px;
        }
}
`;

export default GlobalStyles;
