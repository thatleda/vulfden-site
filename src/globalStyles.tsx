import { createGlobalStyle } from "styled-components";

const theme = {
  light: {
    primaryColor: "#000000",
    secondaryColor: "#a7f8b1",
    tertiaryColor: "#f2f2f2",
    textColor: "#000000",
    subtextColor: "#555555",
    backgroundColor: "#d2d2d2",
    cardBackgroundColor: "#dddddd",
    scrollbarColor: "rgba(0, 0, 0, 0.5)",
    boxShadowColor: "#dddddd",
    boxShadowHoverColor: "rgba(0, 0, 0, 0.32)",
    baseFont: "'Fira Sans', sans-serif",
  },

  dark: {
    primaryColor: "#fafafa",
    secondaryColor: "#055b01",
    tertiaryColor: "#252525",
    textColor: "rgba(255, 255, 255, 0.607)",
    subtextColor: "#aaaaaaa4",
    backgroundColor: "#121212",
    cardBackgroundColor: "#202020",
    scrollbarColor: "rgba(255, 255, 255, 0.5)",
    boxShadowColor: "rgba(0, 0, 0, 0.16)",
    boxShadowHoverColor: "rgba(0, 0, 0, 0.32)",
    baseFont: "'Fira Sans', sans-serif",
  },
};

const GlobalStyle = createGlobalStyle<{ colorMode: "light" | "dark" }>`
html {
    scroll-behavior: smooth;
}

* {
    box-sizing: border-box;
}

body {
    
    // CSS variables
    --border-radius: 1rem;
    --page-width: 62rem;
    --page-padding: 0 1rem;
    --header-height: 6.25rem;
    --footer-height: 7.5rem;
    --primary-color: ${(props) => theme[props.colorMode].primaryColor};
    --secondary-color: ${(props) => theme[props.colorMode].secondaryColor};
    --tertiary-color: ${(props) => theme[props.colorMode].tertiaryColor};
    --text-color: ${(props) => theme[props.colorMode].textColor};
    --subtext-color: ${(props) => theme[props.colorMode].subtextColor};
    --background-color: ${(props) => theme[props.colorMode].backgroundColor};
    --card-background-color: ${(props) =>
      theme[props.colorMode].cardBackgroundColor};
    --scroll-bar-color: ${(props) => theme[props.colorMode].scrollbarColor};
    --box-shadow-color: ${(props) => theme[props.colorMode].boxShadowColor};
    --box-shadow-hover-color: ${(props) =>
      theme[props.colorMode].boxShadowHoverColor};
    --base-font: ${(props) => theme[props.colorMode].baseFont};

    height: 100%;
    background-color: var(--background-color);
    color: var(--text-color);
    font-size: 18px;
    font-weight: 300;
    font-family: var(--base-font);
    text-rendering: optimizeLegibility;

    @media (max-width: 749px) {
        font-size: 12px;
    }

    @media (max-width: 1030px) {
        font-size: 16px;
    }

    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: var(--subtext-color);
        cursor: pointer;
        &:hover {
            outline: 0
        }
        &:focus {
            outline-color: var(--subtext-color);
            outline-style: dotted;
            outline-width: 2px;
        }
    }

    h1 {
        font-family: 'Silkscreen', sans-serif;
        font-size: 2.5rem;
    }

    h2 {
        font-family: 'Homemade Apple', cursive;
    }

    h3 {
        text-transform: uppercase;
    }

    em {
        font-family: 'Homemade Apple', cursive;
        font-style: normal;
        margin: 0 0.25rem;
        line-height: 0.8rem;
        font-size: 1.1rem;
    }

    q {
        font-style: italic;
        color: var(--primary-color)
    }

    u {
        text-decoration: none;
        box-shadow: inset 0 -0.7em 0 var(--secondary-color);
        transition: box-shadow 0.3s ease-out;
        &:hover {
            box-shadow: inset 0 -1.5em 0 var(--secondary-color);
        }
    }
    #___gatsby, #gatsby-focus-wrapper {
        width: 100%;
        height: 100%;
    }

/* Disable smooth scrolling when users have prefers-reduced-motion enabled */
    @media screen and (prefers-reduced-motion: reduce) {
        html {
            scroll-behavior: auto;
        }
    }
}
`;

export default GlobalStyle;
