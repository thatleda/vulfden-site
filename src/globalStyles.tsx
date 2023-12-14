import { createGlobalStyle, css } from "styled-components";

const theme = {
  light: {
    primaryColor: "#000000",
    secondaryColor: "#fff4d9",
    tertiaryColor: "#f2f2f2",
    textColor: "#000000",
    subtextColor: "#555555",
    backgroundColor: "#ffffff",
    cardBackgroundColor: "#ffffff",
    scrollbarColor: "rgba(0, 0, 0, 0.5)",
    boxShadowColor: "rgba(0, 0, 0, 0.16)",
    boxShadowHoverColor: "rgba(0, 0, 0, 0.32)",
    baseFont: `'Nunito Sans', sans-serif`,
  },

  dark: {
    primaryColor: "#fafafa",
    secondaryColor: "#341677",
    tertiaryColor: "#252525",
    textColor: "rgba(255, 255, 255, 0.87)",
    subtextColor: "#aaaaaa",
    backgroundColor: "#121212",
    cardBackgroundColor: "#1c1c1c",
    scrollbarColor: "rgba(255, 255, 255, 0.5)",
    boxShadowColor: "rgba(0, 0, 0, 0.16)",
    boxShadowHoverColor: "rgba(0, 0, 0, 0.32)",
    baseFont: `'Nunito Sans', sans-serif`,
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
    --page-padding: 0 2.5rem;
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

    width: 100%;
    height: 100%;
    background-color: var(--background-color);
    color: var(--text-color);
    font-size: 1rem;
    font-family: var(--base-font);
    line-height: 1.5rem;
    font-weight: 400;
    text-rendering: optimizeLegibility;

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
    }

    h2 {
        font-family: 'Homemade Apple', cursive;
    }

    h3 {
        font-family: 'Homemade Apple', cursive;
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
