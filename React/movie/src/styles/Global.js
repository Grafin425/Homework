import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    body {
        background: ${props => props.theme.colors.background};
        font-size: 15px;
        font-family: sans-serif;
        color: ${props => props.theme.colors.text};
    }
    header {
         background: ${props => props.theme.colors.backgroundH};
    }
    main {
         background: ${props => props.theme.colors.background};
         color: ${props => props.theme.colors.text};

    }
    footer { 
         background: ${props => props.theme.colors.backgroundF};

    }
    input { 
         background: ${props => props.theme.colors.backgroundF};
    }
    option {
          color: ${props => props.theme.colors.text};
    }
     select {
           background: ${props => props.theme.colors.backgroundF};

           color: ${props => props.theme.colors.text};
    }
    Button{
           background: ${props => props.theme.colors.BButton};

           color: ${props => props.theme.colors.Btext};

    }
    `
;

