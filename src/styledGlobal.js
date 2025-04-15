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
        max-width: 1920px;
        max-height: 3126px;
    }
`;

export default StyledGlobal;