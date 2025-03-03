import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: "Poppins", serif;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background: ${({ theme }) => theme.colors.lightGrey};
        border-style: dotted;
    }
`;

export default StyledGlobal;